from django.urls import path, include

from rest_auth.registration.views import RegisterView

from .views import EmailRegisterView


auth_urls = (
    [
        path('', include('rest_auth.urls')),
        path('registration/', RegisterView.as_view(), name = 'registration'),
        path('send-mail-register/', EmailRegisterView.as_view(), name = 'mail-link-register')
    ],
    'auth'
)