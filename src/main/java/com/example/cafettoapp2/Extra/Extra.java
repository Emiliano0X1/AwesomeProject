package com.example.cafettoapp2.Extra;

import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import com.example.cafettoapp2.Producto.TypeProducts.prodcutoFrappe;
import com.example.cafettoapp2.Producto.TypeProducts.productoSmoothie;
import com.example.cafettoapp2.Producto.TypeProducts.productoWithOneExtra;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Extra {

    @Id
    @SequenceGenerator(name = "extra_sequence", sequenceName = "extra_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "extra_sequence")
    private int id;

    private String label;
    private String value;
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

    public Extra(String label, String value, int price, String type) {
        this.label = label;
        this.value = value;
        this.price = price;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
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

    public List<prodcutoFrappe> getFrappes() {
        return frappes;
    }

    public void setFrappes(List<prodcutoFrappe> frappes) {
        this.frappes = frappes;
    }

    public List<productoWithOneExtra> getMilks() {
        return milks;
    }

    public void setMilks(List<productoWithOneExtra> milks) {
        this.milks = milks;
    }

    public List<productoSmoothie> getSmoothies() {
        return smoothies;
    }

    public void setSmoothies(List<productoSmoothie> smoothies) {
        this.smoothies = smoothies;
    }
}
