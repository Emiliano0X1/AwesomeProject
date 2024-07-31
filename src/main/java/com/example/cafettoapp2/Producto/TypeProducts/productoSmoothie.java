package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;

public class productoSmoothie extends Producto{

    private String description;
    private Extra extra;

    public productoSmoothie(String name, int price, String type, String description,Extra extra) {
        super(name, price, type);
        this.description = description;
        this.extra = extra;
    }

    public Extra getExtra() {
        return extra;
    }

    public void setExtra(Extra extra) {
        this.extra = extra;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
