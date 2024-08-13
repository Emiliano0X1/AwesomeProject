package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;

import java.util.List;

@Entity
@DiscriminatorValue("Waffle")
public class productoWaffle extends Producto{


    @ManyToMany
    @JoinTable(
            name = "waffle_extra",
            joinColumns = @JoinColumn(name = "waffle_id"),
            inverseJoinColumns = @JoinColumn(name = "extra_id")
    )
    private List<Extra> extras;

    @Transient
    private String description;

    public productoWaffle() {}

    public productoWaffle(String name, int price, String type, String extraType, List<Extra> extras, String description) {
        super(name, price, type, extraType);
        this.extras = extras;
        this.description = description;
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
