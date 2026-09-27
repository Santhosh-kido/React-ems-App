package com.ems.employe_management_system.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ems.employe_management_system.entity.Employee;
import com.ems.employe_management_system.service.EmpService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class Controller {

    private final EmpService empService;

    public Controller(EmpService empService) {
        this.empService = empService;
    }

    @GetMapping("/get-employees")
    public ResponseEntity<List<Employee>> getAllEmployees() {

        List<Employee> employees = empService.fetchAllEmployees();

        return ResponseEntity.ok(employees);
    }

    @PostMapping("/add-employee")
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee) {

        String result = empService.addEmployee(employee);

        if (result.equals("Employee already exists..!")) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(result);
        }

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(result);
    }

    @PutMapping("/update-employee")
    public ResponseEntity<String> updateEmployee(@RequestBody Employee employee) {

        boolean updated = empService.updateEmployee(employee);

        if (!updated) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Employee not found..!");
        }

        return ResponseEntity.ok("Employee updated successfully..!");
    }

    @GetMapping("/filter-by-name")
    public ResponseEntity<?> getByName(@RequestParam String name) {

        List<Employee> employees = empService.findByName(name);

        if (employees.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Employee not found..!");
        }

        return ResponseEntity.ok(employees);
    }

    @GetMapping("/filter-by-dept")
    public ResponseEntity<?> getByDept(@RequestParam String dept) {

        List<Employee> employees = empService.findByDept(dept);

        if (employees.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Department not found..!");
        }

        return ResponseEntity.ok(employees);
    }

    @DeleteMapping("/remove-by-id")
    public ResponseEntity<String> removeById(@RequestParam int id) {

        boolean deleted = empService.deleteById(id);

        if (!deleted) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Employee not found..!");
        }

        return ResponseEntity.ok("Employee removed successfully..!");
    }

    @GetMapping("/filter-by-even-id")
    public ResponseEntity<?> getByEvenId() {

        List<Employee> employees = empService.getEvenEmployees();

        if (employees.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No employees found..!");
        }

        return ResponseEntity.ok(employees);
    }

    @GetMapping("/filter-by-odd-id")
    public ResponseEntity<?> getByOddId() {

        List<Employee> employees = empService.getOddEmployees();

        if (employees.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No employees found..!");
        }

        return ResponseEntity.ok(employees);
    }
}