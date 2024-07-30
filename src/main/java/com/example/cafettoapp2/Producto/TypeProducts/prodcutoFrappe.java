package com.example.cafettoapp2.Producto.TypeProducts;

public class prodcutoFrappe extends Producto{

    private String size;
    private int medPrice;
    private int gdePrice;

    public prodcutoFrappe(String name, int price, String type, String size, int medPrice, int gdePrice) {
        super(name, price, type);
        this.size = size;
        this.medPrice = medPrice;
        this.gdePrice = gdePrice;
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
}
