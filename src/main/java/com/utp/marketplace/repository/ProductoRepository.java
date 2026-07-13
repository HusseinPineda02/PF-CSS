package com.utp.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utp.marketplace.model.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}