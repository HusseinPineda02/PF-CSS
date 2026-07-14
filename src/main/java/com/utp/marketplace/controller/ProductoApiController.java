package com.utp.marketplace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utp.marketplace.model.Producto;
import com.utp.marketplace.service.ProductoService;

@RestController
public class ProductoApiController {

    @Autowired
    private ProductoService service;

    @GetMapping("/api/productos")
    public List<Producto> listarProductos(){

        return service.listarProductos();

    }

}