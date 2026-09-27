package com.ems.employe_management_system.service.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ems.employe_management_system.entity.Employee;
import com.ems.employe_management_system.repository.EmpRepository;
import com.ems.employe_management_system.service.EmpService;

@Service
public class EmpServiceImpl implements EmpService {

    private final EmpRepository empRepo;

    public EmpServiceImpl(EmpRepository empRepo) {
        this.empRepo = empRepo;
    }

    @Override
    public List<Employee> fetchAllEmployees() {
        return empRepo.findAll();
    }

    @Override
    public String addEmployee(Employee employee) {

        Optional<Employee> exists = empRepo.findById(employee.getId());

        if (exists.isPresent()) {
            return "Employee already exists..!";
        }

        empRepo.save(employee);
        return "Employee added successfully..!";
    }

    @Override
    public List<Employee> findByName(String name) {

        return empRepo.findByNameStartingWithIgnoreCase(name);
    }

    @Override
    public List<Employee> findByDept(String dept) {

        return empRepo.findByDeptStartingWithIgnoreCase(dept);
    }

    @Override
    public boolean deleteById(int id) {

        Optional<Employee> employee = empRepo.findById(id);

        if (employee.isEmpty()) {
            return false;
        }
        empRepo.deleteById(id);
        return true;
    }

    @Override
public boolean updateEmployee(Employee employee) {

    Optional<Employee> existing = empRepo.findById(employee.getId());

    if (existing.isEmpty()) {
        return false;
    }

    Employee toUpdate = existing.get();

    if (employee.getName() != null && !employee.getName().isEmpty()) {
        toUpdate.setName(employee.getName());
    }
    if (employee.getDept() != null && !employee.getDept().isEmpty()) {
        toUpdate.setDept(employee.getDept());
    }

    empRepo.save(toUpdate);
    return true;
}

    @Override
    public List<Employee> getEvenEmployees() {

        return empRepo.findEmployeesWithEvenId();
    }

    @Override
    public List<Employee> getOddEmployees() {

        return empRepo.findEmployeesWithOddId();
    }
}