package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Transient;

@Entity
@DiscriminatorValue("SMOOTHIE")
public class productoSmoothie extends Producto{

    private String description;
    public productoSmoothie(){}

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
