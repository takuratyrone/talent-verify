# Generated by Django 4.2.6 on 2023-10-12 12:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('talentVerify', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=255)),
            ],
        ),
        migrations.AlterField(
            model_name='company',
            name='company_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='company_registration_number',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='contact_person',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='company',
            name='contact_phone',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='company',
            name='date_of_registration',
            field=models.DateField(auto_now_add=True, verbose_name='Registration Date'),
        ),
        migrations.CreateModel(
            name='Role_Duties',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('duty', models.CharField(max_length=255)),
                ('role_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talentVerify.role')),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_name', models.CharField(max_length=50)),
                ('employee_id', models.CharField(max_length=50)),
                ('department', models.CharField(max_length=50)),
                ('date_started', models.DateField(auto_now_add=True, verbose_name='Start Date')),
                ('date_left', models.DateField()),
                ('role_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talentVerify.role')),
            ],
        ),
        migrations.CreateModel(
            name='Departments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(max_length=255)),
                ('company_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talentVerify.company')),
            ],
        ),
    ]
