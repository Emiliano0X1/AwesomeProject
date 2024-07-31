package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;

public class productoWithOneExtra extends Producto{

    private Extra extra;

    public productoWithOneExtra(String name, int price, String type, Extra extra) {
        super(name, price, type);
        this.extra = extra;
    }

    public Extra getExtra() {
        return extra;
    }

    public void setExtra(Extra extra) {
        this.extra = extra;
    }
}
