# Generated by Django 3.2.6 on 2021-11-23 01:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('administrador', '0002_delete_personal'),
    ]

    operations = [
        migrations.CreateModel(
            name='Personal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombres', models.CharField(max_length=30)),
                ('Apellidos', models.CharField(max_length=30)),
                ('DNI', models.IntegerField(max_length=8)),
                ('Direccion', models.CharField(max_length=100)),
                ('Sexo', models.CharField(max_length=40)),
                ('Cargo', models.CharField(max_length=50)),
                ('Telefono', models.IntegerField(max_length=9)),
                ('Correo', models.CharField(max_length=50)),
            ],
        ),
    ]
