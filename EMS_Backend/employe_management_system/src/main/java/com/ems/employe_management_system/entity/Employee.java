package com.ems.employe_management_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table (name = "employees")
public class Employee {
    
    @Id
    private int id;
    
    private String name;

    private String dept;

    public Employee(){}    

    public Employee(int id, String name, String dept){
        this.id = id;
        this.name=name;
        this.dept=dept;
        
    }
    public int getId(){
        return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name =name;
    }
    public String getDept(){
        return dept;
    }
    public void setDept(String dept){
        this.dept = dept;
    }



}
