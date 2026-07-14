package com.utp.marketplace.service;

import com.utp.marketplace.model.Usuario;
import com.utp.marketplace.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario login(String usuario, String password) {

        return repository.findByUsuarioAndPassword(usuario, password);

    }

}