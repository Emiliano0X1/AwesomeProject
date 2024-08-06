package com.example.cafettoapp2.Extra;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Extra {

    @Id
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;

    private String name;
    private int price;
    private String type;

    public Extra() {
    }

    public Extra(String name, int price, String type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    public Extra(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @ManyToMany
    private List<Producto> productos;
}
