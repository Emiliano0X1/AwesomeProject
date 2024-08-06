package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import com.example.cafettoapp2.Producto.TypeProducts.prodcutoFrappe;
import com.example.cafettoapp2.Producto.TypeProducts.productoSmoothie;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductoConfig {

    @Bean
    CommandLineRunner commandLineRunner(ProductoRepository repo) {
        return args -> {
            Producto p1 = new Producto("Americano", 26, "Bebida Caliente");
            Producto p2 = new Producto("Expresso", 26, "Bebida Caliente");
            Producto p3 = new productoSmoothie("Piña-Colada",45,"Smoothie","Bebida con platano y leche de coco");

            repo.saveAll(List.of(p1, p2,p3));
        };

    }
}
