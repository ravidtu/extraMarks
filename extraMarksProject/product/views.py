from django.shortcuts import render
from .models import Files
from .serializers import FilesSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class FilesList(APIView):
    parser_classes = [MultiPartParser, FormParser]
    def get(self, request, format=None):
        files = Files.objects.all()
        serializer = FilesSerializer(files, many=True)
        return Response(serializer.data)

    """
        create a new files.
    """
    
    def post(self, request, format=None):
        serializer = FilesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

