package com.fullstack.fullstack.model;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table( name = "User_Table")
public class User {
    @Id
    @GeneratedValue
    @Column( name = "user_id")
    private Long id;
    @Column( name = "username")
    private String username;
    @Column( name = "name")
    private String name;
    @Column( name = "email")
    private String email;

    @Column(name="Department")
    private String dept;

    public User() {
    }

    public User(Long id, String username, String name, String email, String dept) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.dept = dept;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public  String  getDept(){
        return dept;
    }
    public void setDept(String dept){this.dept = dept;}
}
