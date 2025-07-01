from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Fav

#Serializer for the User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwards = {"password" : {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

#Serializer for the Products in the shop page
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        #fields = ["name", "img", "price", "rating", "description", "path", "created_at"]

#Serializers for the  User's Products in the cart
class UserCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        extra_kwargs = {"author": {"read_only": True}}

class UserFavSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = Fav
        fields = ["product"]
        extra_kwargs = {'user': {"read_only" : True}}