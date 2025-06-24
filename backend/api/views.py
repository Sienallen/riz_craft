from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer, UserSerializer, UserCartSerializer, UserFavSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, BasePermission, SAFE_METHODS
from rest_framework.response import Response

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
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)

class UserCartCreate(generics.ListCreateAPIView):
    serializer_class = UserCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Product.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class UserCartDelete(generics.DestroyAPIView):
    serializer_class = UserCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Product.objects.filter(author=user)

class UserFavCreate(generics.DestroyAPIView):
    serializer_class = UserFavSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Product.objetcts.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

class UserFavDelete(generics.DestroyAPIView):
    serializer_class = UserFavSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Product.objects.filter(author=user)