package com.example.cafettoapp2.Extra;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import com.example.cafettoapp2.Producto.TypeProducts.prodcutoFrappe;
import com.example.cafettoapp2.Producto.TypeProducts.productoSmoothie;
import com.example.cafettoapp2.Producto.TypeProducts.productoWithOneExtra;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Extra {

    @Id
    @SequenceGenerator(name = "extra_sequence", sequenceName = "extra_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "extra_sequence")
    private int id;

    private String name;
    private int price;
    private String type;


    @ManyToMany(mappedBy = "extras")
    private List<prodcutoFrappe> frappes;

    @ManyToMany(mappedBy = "extras")
    private List<productoSmoothie> smoothies;

    @ManyToMany(mappedBy = "extras")
    private List<productoWithOneExtra> milks;


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

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
