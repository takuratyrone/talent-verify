from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import *
from .models import *

# Create your views here.

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        data = Company.objects.all()

        serializer = CompanySerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def departments_list(request):
    if request.method == 'GET':
        data = Departments.objects.all()

        serializer = DepartmentsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DepartmentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def role_list(request):
    if request.method == 'GET':
        data = Role.objects.all()

        serializer = RoleSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def employees_list(request):
    if request.method == 'GET':
        data = Employees.objects.all()

        serializer = EmployeesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def role_duties_list(request):
    if request.method == 'GET':
        data = Role_Duties.objects.all()

        serializer = RoleDutiesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoleDutiesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_400_NOT_FOUND)

    if request.method == 'PUT':
        serializer = CompanySerializer(company, data=request.data, context={'request': request})
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['PUT', 'DELETE'])
def departments_detail(request, pk):
    try:
        department = Departments.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_400_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DepartmentsSerializer(department, data=request.data, context={'request': request})
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        department.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['PUT', 'DELETE'])
def role_detail(request, pk):
    try:
        role = Role.objects.get(pk=pk)
    except Role.DoesNotExist:
        return Response(status=status.HTTP_400_NOT_FOUND)

    if request.method == 'PUT':
        serializer = RoleSerializer(role, data=request.data, context={'request': request})
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        role.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['PUT', 'DELETE'])
def employees_detail(request, pk):
    try:
        employee = Employees.objects.get(pk=pk)
    except Employees.DoesNotExist:
        return Response(status=status.HTTP_400_NOT_FOUND)

    if request.method == 'PUT':
        serializer = EmployeesSerializer(employee, data=request.data, context={'request': request})
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT', 'DELETE'])
def role_duties_detail(request, pk):
    try:
        duty = Role_Duties.objects.get(pk=pk)
    except Role_Duties.DoesNotExist:
        return Response(status=status.HTTP_400_NOT_FOUND)

    if request.method == 'PUT':
        serializer = RoleDutiesSerializer(duty, data=request.data, context={'request': request})
        if serializer.is_valid:
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        duty.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
