package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;
import jakarta.persistence.*;

import java.util.List;
@Entity
@DiscriminatorValue("Milk")
public class productoWithOneExtra extends Producto{

    @ManyToMany
    @JoinTable(
            name = "milks_extra",
            joinColumns = @JoinColumn(name = "milk_id"),
            inverseJoinColumns = @JoinColumn(name = "extra_id")
    )
    private List<Extra> extras;

    public productoWithOneExtra(String name, int price, String type,String extraType, List<Extra> extras) {
        super(name, price, type,extraType);
        this.extras = extras;
    }

    public productoWithOneExtra() {}

    public List<Extra> getExtras() {
        return extras;
    }

    public void setExtras(List<Extra> extras) {
        this.extras = extras;
    }
}
