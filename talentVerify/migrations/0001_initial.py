# Generated by Django 4.2.6 on 2023-10-18 07:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=50)),
                ('date_of_registration', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
                ('company_registration_number', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=255)),
                ('contact_person', models.CharField(max_length=50)),
                ('number_of_employees', models.IntegerField()),
                ('contact_phone', models.CharField(max_length=20)),
                ('email_address', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Role_Duties',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=50, null=True)),
                ('duty', models.CharField(max_length=255, null=True)),
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
                ('date_left', models.DateField(null=True)),
                ('role_duty_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='talentVerify.role_duties')),
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
