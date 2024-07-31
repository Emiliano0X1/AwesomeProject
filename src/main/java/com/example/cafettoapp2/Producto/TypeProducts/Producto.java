package com.example.cafettoapp2.Producto.TypeProducts;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Producto {

    @GeneratedValue
    @Id
    protected Long id;
    protected String name;
    protected int price;
    protected String type;

    public Producto() {}

    public Producto(String name, int price, String type) {
        this.name = name;
        this.price = price;
        this.type = type;
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
}
