package com.utp.marketplace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.marketplace.model.Producto;
import com.utp.marketplace.repository.ProductoRepository;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository repository;

    public List<Producto> listarProductos() {
        return repository.findAll();
    }

    public Producto guardarProducto(Producto producto) {
        return repository.save(producto);
    }

    public Producto buscarPorId(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminarProducto(Integer id) {
        repository.deleteById(id);
    }

}