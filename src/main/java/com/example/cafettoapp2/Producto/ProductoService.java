package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> getProducto(){
        return productoRepository.findAll();
    }
}
