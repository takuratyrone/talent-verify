from django.db import models

# Create your models here.
class Company(models.Model):
    company_name = models.CharField(max_length=50)
    date_of_registration = models.DateField("Registration Date", auto_now_add=True)
    company_registration_number = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=50)
    number_of_employees = models.IntegerField()
    contact_phone = models.CharField(max_length=20)
    email_address = models.EmailField()

class Departments(models.Model):
    company_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    department = models.CharField(max_length=255)

class Role(models.Model):
    role = models.CharField(max_length=255)

class Employees(models.Model):
    employee_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    date_started = models.DateField("Start Date", auto_now_add=True)
    date_left = models.DateField(null=True)

class Role_Duties(models.Model):
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    duty = models.CharField(max_length=255)
