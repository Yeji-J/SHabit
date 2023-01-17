package com.ezpz.shabit.user.repository;

import com.ezpz.shabit.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.SQLException;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmail(String email) throws SQLException;
}
