package com.example.cafettoapp2.Producto.TypeProducts;

import com.example.cafettoapp2.Extra.Extra;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("Frappe")
public class prodcutoFrappe extends Producto{

    private String size;

    private int medPrice;

    private int gdePrice;

    @ManyToMany
    @JoinTable(
            name = "frappe_extra",
            joinColumns = @JoinColumn(name = "frappe_id"),
            inverseJoinColumns = @JoinColumn(name = "extra_id")
    )
    private List<Extra> extras;

    public prodcutoFrappe() {}

    public prodcutoFrappe(String name,int price, String type, String size, int medPrice, int gdePrice,String extraType,List<Extra> extras) {
        super(name,price, type,extraType);
        this.size = size;
        this.medPrice = medPrice;
        this.gdePrice = gdePrice;
        this.extras = extras;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getMedPrice() {
        return medPrice;
    }

    public void setMedPrice(int medPrice) {
        this.medPrice = medPrice;
    }

    public int getGdePrice() {
        return gdePrice;
    }

    public void setGdePrice(int gdePrice) {
        this.gdePrice = gdePrice;
    }

    public void setNewPriceDependsSize(String size, int medPrice, int gdePrice) {

        if(size.equals("mediano")){
            setPrice(medPrice);
        }
        else{
            setPrice(gdePrice);
        }
    }

    public List<Extra> getExtras() {
        return extras;
    }

    public void setExtras(List<Extra> extras) {
        this.extras = extras;
    }
}
