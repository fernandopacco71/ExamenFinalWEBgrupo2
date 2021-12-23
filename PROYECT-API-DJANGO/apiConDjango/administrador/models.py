from django.db import models

# Create your models here.
#class Personal(models.Model):
 #   Nombres = models.CharField(max_length=30, null=False)
 #   Apellidos = models.CharField(max_length=30)
 #   DNI = models.IntegerField()
 #   Direccion = models.CharField(max_length=100)
 #   Sexo = models.CharField(max_length=40)
 #   Cargo = models.CharField(max_length=50)
 #   Telefono = models.IntegerField()
  #  Correo = models.CharField(max_length=50)

class Personal(models.Model):
    Nombres = models.CharField(max_length=30, null=False)
    Apellidos = models.CharField(max_length=30)
    DNI = models.CharField(max_length=8)
    Direccion = models.CharField(max_length=100)
    Sexo = models.CharField(max_length=40)
    Cargo = models.CharField(max_length=50)
    Telefono = models.CharField(max_length=9)
    Correo = models.CharField(max_length=50)