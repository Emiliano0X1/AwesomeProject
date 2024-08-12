package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
