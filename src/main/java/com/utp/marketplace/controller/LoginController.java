package com.utp.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.utp.marketplace.model.Usuario;
import com.utp.marketplace.service.UsuarioService;

import jakarta.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login")
    public String mostrarLogin() {
        return "login";
    }

    @PostMapping("/login")
    public String login(
            @RequestParam String usuario,
            @RequestParam String password,
            HttpSession session) {

        Usuario user = usuarioService.login(usuario, password);

        if (user == null) {
            return "redirect:/login";
        }

        session.setAttribute("usuario", user);

        if (user.getRol().equals("ADMIN")) {
            return "redirect:/admin";
        }

        return "redirect:/";
    }

    @GetMapping("/admin")
    public String admin(HttpSession session) {

        Usuario usuario = (Usuario) session.getAttribute("usuario");
        
        if (usuario == null) {
            return "redirect:/login";
        }

        if (!usuario.getRol().equals("ADMIN")) {
            return "redirect:/";
        }

        return "admin";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {

        session.invalidate();

        return "redirect:/login";
    }

}