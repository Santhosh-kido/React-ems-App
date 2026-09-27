package com.ems.employe_management_system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ems.employe_management_system.entity.Employee;

public interface EmpRepository extends JpaRepository<Employee, Integer> {

    List<Employee> findByNameStartingWithIgnoreCase(String name);

    List<Employee> findByDeptStartingWithIgnoreCase(String dept);

    @Query("SELECT e FROM Employee e WHERE MOD(e.id, 2) = 0")
    List<Employee> findEmployeesWithEvenId();

    @Query("SELECT e FROM Employee e WHERE MOD(e.id, 2) != 0")
    List<Employee> findEmployeesWithOddId();

}
