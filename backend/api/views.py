from django.shortcuts import render
from django.contrib.auth.models import User
from django.conf import settings
from rest_framework import generics, status
from .models import Cart, Product, Fav
from .serializers import ProductSerializer, UserSerializer, UserCartSerializer, UserFavSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission, SAFE_METHODS
from rest_framework.response import Response
from supabase import create_client, Client
import os
from dotenv import load_dotenv

load_dotenv()

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [ReadOnly]

    def list(self, request):
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        file = request.FILES.get('img')
        if not file:
            return Response({"error": "Image file is required"}, status = status.HTTP_400_BAD_REQUEST)

        try:
            file_data = file.read()
            file_path = f"products/{file.name}"
            bucket_name = settings.SUPABASE_BUCKET

            supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

            # Upload to Supabase private Storage
            reponse = supabase.storage.from_(bucket_name).upload(file_path, file_data, file.content_type)

             # Store file_path in DB
            data = request.data.copy()
            data['img'] = file_path  # just the path

            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserCartCreate(generics.ListCreateAPIView):
    serializer_class = UserCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class UserCartDelete(generics.DestroyAPIView):
    serializer_class = UserCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)

class UserCartUpdate(generics.UpdateAPIView):
    serializer_class = UserCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Cart.objects.filter(user=user)

class UserFavCreate(generics.ListCreateAPIView):
    serializer_class = UserFavSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Fav.objects.filter(user=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class UserFavDelete(generics.DestroyAPIView):
    serializer_class = UserFavSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Fav.objects.filter(user=user)

