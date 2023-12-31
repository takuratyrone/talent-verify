from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http import JsonResponse

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
        serializer = CompanySerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': 'Company added!'}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def departments_list(request):
    if request.method == 'GET':
        data = Departments.objects.all()

        serializer = DepartmentsSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        data = request.data
        response_data = []

        for item in data:
            company_name = item['company_name']
            print(company_name)

            try:
                company = Company.objects.get(company_name=company_name)
            except Company.DoesNotExist:
                return Response({'error': 'Company does not exist!'}, status=status.HTTP_404_NOT_FOUND)
            
            departments_data = {
                'company_id': company.id,
                'department': item['department']
            }
            serializer = DepartmentsSerializer(data=departments_data)
            if serializer.is_valid():
                serializer.save()
                response_data.append(serializer.data)
                print(departments_data['department'])
                # return Response({'data': 'Department(s) added!'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def employees_list(request):
    if request.method == 'GET':
        data = Employees.objects.all()

        serializer = EmployeesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        data = request.data
        response_data = []

        for item in data:
            role_duty = item['role_duty']

            try:
                role = Role_Duties.objects.get(role=role_duty)
            except Role_Duties.DoesNotExist:
                return Response({'error': 'Role does not exist!'}, status=status.HTTP_404_NOT_FOUND)
            
            employee_data = {
                'employee_name': item['employee_name'],
                'employee_id': item['employee_id'],
                'department': item['department'],
                'role_duty_id': role.id,
                'date_started': item['date_started'],
            }

            serializer = EmployeesSerializer(data=employee_data)
            if serializer.is_valid():
                serializer.save()
                response_data.append(serializer.data)
                # return Response({'data': 'Employee(s) added!'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'POST'])
def role_duties_list(request):
    if request.method == 'GET':
        data = Role_Duties.objects.all()

        serializer = RoleDutiesSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoleDutiesSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': 'Duty added!'}, status=status.HTTP_201_CREATED)
        
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
    
@api_view(['GET'])
def company_search(request):
    if request.method == 'GET':
        search_query = request.GET.get('search_query', '')
        print('search query' + search_query)
        search_results = Company.objects.filter(company_name__icontains=search_query)
        serialized_results = list(search_results.values())
        # print(serialized_results)
        return JsonResponse(serialized_results, safe=False)
    
@api_view(['GET'])
def employee_search(request):
    if request.method == 'GET':
        search_query = request.GET.get('search_query', '')
        print('search query' + search_query)
        search_results = Employees.objects.filter(employee_name__icontains=search_query)
        serialized_results = list(search_results.values())
        # print(serialized_results)
        return JsonResponse(serialized_results, safe=False)

@api_view(['GET'])
def department_search(request):
    if request.method == 'GET':
        search_query = request.GET.get('search_query', '')
        print('search query' + search_query)
        search_results = Departments.objects.filter(department__icontains=search_query)
        serialized_results = list(search_results.values())
        # print(serialized_results)
        return JsonResponse(serialized_results, safe=False)
    
@api_view(['GET'])
def role_search(request):
    if request.method == 'GET':
        search_query = request.GET.get('search_query', '')
        print('search query' + search_query)
        search_results = Role_Duties.objects.filter(role__icontains=search_query)
        serialized_results = list(search_results.values())
        # print(serialized_results)
        return JsonResponse(serialized_results, safe=False)

