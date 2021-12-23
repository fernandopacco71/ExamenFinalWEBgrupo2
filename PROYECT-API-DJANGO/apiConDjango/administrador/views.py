from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework import response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

from administrador.models import Personal
#from administrador.serializers import ProductoSerializer,ClienteSerializer
from administrador.serializers import PersonalSerializer

@api_view(['GET', 'POST'])
def lista_personal(request):
    """
    Lista de todos el personal
    """
    if request.method == 'GET':
        personal = Personal.objects.all()
        serializer = PersonalSerializer(personal, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PersonalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#desde aqui agregado
@api_view(['GET', 'PUT', 'DELETE'])
def personal_detalle(request, pk):
    """
    Recupera, un producto para eliminar o actualizar
    """
    try:
        personal =Personal.objects.get(pk=pk)
    except Personal.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PersonalSerializer(personal)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PersonalSerializer(personal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        personal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#DESDE AQUIT
def home(request):
    proyecto = " - SISTEMA DE VENTAS"
    cxt={
        'proyecto':proyecto,
    }
    return render(request, 'file/inicio.html')
'''

def listadosdelpersonal(request):
    proyecto = " - SISTEMA DE VENTAS"
    cxt={
        'proyecto':proyecto,
    }
    return render(request, lista_personal,cxt)
def detalledelpersonal(request):
    proyecto = " - SISTEMA DE VENTAS"
    cxt={
        'proyecto':proyecto,
    }
    return render(request, personal_detalle,cxt)'''