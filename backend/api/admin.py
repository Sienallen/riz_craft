from django.contrib import admin
from .models import Product, Fav

# Register your models here.
admin.site.register(Product)
admin.site.register(Fav)