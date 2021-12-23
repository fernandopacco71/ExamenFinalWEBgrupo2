from rest_framework import serializers
#from rest_framework.reverse import reverse
from administrador.models import Personal


class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal
        fields = ('id','Nombres','Apellidos','DNI','Direccion','Sexo','Cargo','Telefono','Correo')

