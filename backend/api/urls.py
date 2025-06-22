from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductListView.as_view(), name = "product-list"),
    path("cart/", views.UserCartCreate.as_view(), name = "user-cart-list" ),
    path("cart/delete/<int:pk>", views.UserCartDelete.as_view(), name = "user-cart-delete"),
]
