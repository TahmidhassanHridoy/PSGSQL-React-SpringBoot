package com.fullstack.fullstack.repository;

import com.fullstack.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long > {

}
