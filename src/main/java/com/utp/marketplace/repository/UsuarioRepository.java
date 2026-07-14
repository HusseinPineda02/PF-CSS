package com.utp.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utp.marketplace.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Usuario findByUsuarioAndPassword(String usuario, String password);

}