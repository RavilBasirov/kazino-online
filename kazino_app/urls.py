from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('feedback/', views.feedback, name='feedback'),
    path('auth/', views.auth, name='auth'),
    path('register/', views.register, name='register'),
    path('kosti/', views.kosti, name='kosti'),
]