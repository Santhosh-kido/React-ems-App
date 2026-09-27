package com.ems.employe_management_system.service;

import java.util.List;

import com.ems.employe_management_system.entity.Employee;

public interface EmpService {

    List<Employee> fetchAllEmployees();

    String addEmployee(Employee employee);

    List<Employee> findByName(String name);

    List<Employee> findByDept(String dept);

    boolean deleteById(int id);

    boolean updateEmployee(Employee employee);

    List<Employee> getEvenEmployees();

    List<Employee> getOddEmployees();
}