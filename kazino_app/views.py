from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.utils import timezone
from django.contrib.auth import authenticate, login
from .models import Email
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def kosti(request):
    if request.method == 'POST':
        kosti1 = 'img/' + request.POST.get('kosti1') + '.png'
        kosti2 = 'img/' + request.POST.get('kosti2') + '.png'
        kosti3 = 'img/' + request.POST.get('kosti3') + '.png'
        kosti4 = 'img/' + request.POST.get('kosti4') + '.png'
        print(kosti1, kosti2, kosti3, kosti4)

        context = {
            'kosti1': kosti1,
            'kosti2': kosti2,
            'kosti3': kosti3,
            'kosti4': kosti4,
        }

        return render(request, 'kosti.html', context)
    else:
        kosti1 = 'img/1.png'
        kosti2 = 'img/1.png'
        kosti3 = 'img/1.png'
        kosti4 = 'img/1.png'

        context = {
            'kosti1': kosti1,
            'kosti2': kosti2,
            'kosti3': kosti3,
            'kosti4': kosti4,
        }
        return render(request, 'kosti.html', context)

@csrf_exempt
def feedback(request):
    if request.method == 'POST':
        email_adress = request.POST.get('email')
        
        if email_adress:
            email = Email(email=email_adress, send_date=timezone.now())
            email.save()
            print(f"Ещё один лох имэйл кинул: {email}")
            return JsonResponse({'status': 'success', 'message': 'Email получен'})
        else:
            return JsonResponse({'status': 'success', 'message': 'Email не получен'})
    return render(request, 'feedback.html')

def auth(request):
    return render(request, 'auth.html')

def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        password = request.POST.get('password')
        email = request.POST.get('email')
        username = request.POST.get('login')

        user = User.objects.create_user(username, email, password)
        user.save
        login(request, user)

        print(name, login, password, email)

    return render(request, 'register.html')