from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import serializers
from supabase import create_client
from .models import Cart, Product, Fav


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
    img = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'
        #fields = ["name", "img", "price", "rating", "description", "path", "created_at"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)

    def get_img(self, obj):
        if not obj.img:
            return None

        try:
        # Generate a signed URL valid for 1 hour (3600 seconds)
            result = self.supabase.storage.from_(settings.SUPABASE_BUCKET).create_signed_url(obj.img, expires_in=3600)
            return result.get("signedURL")
        except Exception as e:
            print(f"Signed URL generation error: {e}")
            return None

#Serializers for the  User's Products in the cart
class UserCartSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset = Product.objects.all(), write_only = True, source = "product")

    class Meta:
        model = Cart
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}


class UserFavSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(queryset = Product.objects.all(), write_only = True, source = "product")

    class Meta:
        model = Fav
        fields = ["product", "id", "product_id"]
        extra_kwargs = {'user': {"read_only" : True}}