from django.urls import path
from .views import login_user, register_user, get_user
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name=('login')),
    path('getuser/', get_user),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]