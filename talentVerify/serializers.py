from rest_framework import serializers
from .models import Company, Departments, Role, Employees, Role_Duties

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = (
            'id', 
            'company_name', 
            'date_of_registration', 
            'company_registration_number',
            'address',
            'contact_person',
            'number_of_employees',
            'contact_phone',
            'email_address',
        )

class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = (
            'id',
            'company_id',
            'department'
        )

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = (
            'id',
            'role'
        )

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = (
            'id',
            'employee_name',
            'employee_id',
            'department',
            'role_id',
            'date_started',
            'date_left'
        )

class  RoleDutiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role_Duties
        fields = (
            'role_id',
            'duty'
        )