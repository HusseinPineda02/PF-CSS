package com.utp.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.utp.marketplace.model.Producto;
import com.utp.marketplace.service.ProductoService;

@Controller
public class ProductoController {

    @Autowired
    private ProductoService service;

    @GetMapping("/admin/productos")
    public String listar(Model model){

        model.addAttribute("productos", service.listarProductos());

        return "admin-productos";
    }

    @GetMapping("/admin/nuevo")
    public String nuevo(Model model){

        model.addAttribute("producto", new Producto());

        return "admin-form";
    }

    @PostMapping("/admin/guardar")
    public String guardar(@ModelAttribute Producto producto){

        service.guardarProducto(producto);

        return "redirect:/admin/productos";
    }

    @GetMapping("/admin/editar/{id}")
    public String editar(@PathVariable Integer id, Model model){

        model.addAttribute("producto", service.buscarPorId(id));

        return "admin-form";
    }

    @GetMapping("/admin/eliminar/{id}")
    public String eliminar(@PathVariable Integer id){

        service.eliminarProducto(id);

        return "redirect:/admin/productos";
    }

}