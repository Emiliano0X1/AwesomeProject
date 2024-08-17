package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;
import jakarta.persistence.*;

import java.util.List;

@Entity
@DiscriminatorValue("Smoothie")
public class productoSmoothie extends Producto{

    @ManyToMany
    @JoinTable(
            name = "smoothie_extra",
            joinColumns = @JoinColumn(name = "smoothie_id"),
            inverseJoinColumns = @JoinColumn(name = "extra_id")
    )
    private List<Extra> extras;

    private String description;

    public productoSmoothie(){}

    public productoSmoothie(String name, int price,String extraType, String type, String description, List<Extra> extras) {
        super(name, price, type, extraType);
        this.description = description;
        this.extras = extras;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Extra> getExtras() {
        return extras;
    }

    public void setExtras(List<Extra> extras) {
        this.extras = extras;
    }
}
