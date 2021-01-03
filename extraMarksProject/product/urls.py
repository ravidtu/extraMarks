from django.urls import path
from .views import *

urlpatterns = [
    path('files/upload/', FilesList.as_view()),    
]
