package com.example.cafettoapp2.Producto.TypeProducts;

public class productoSmoothie extends Producto{

    private String description;

    public productoSmoothie(String name, int price, String type, String description) {
        super(name, price, type);
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
