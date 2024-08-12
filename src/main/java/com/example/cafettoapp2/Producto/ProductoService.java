package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Extra.Extra;
import com.example.cafettoapp2.Producto.TypeProducts.*;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> getProducto(){
        return productoRepository.findAll();
    }

    public void addNewProducto(Producto producto){
        if(producto == null){
            throw new IllegalArgumentException("Null producto");
        }
        productoRepository.save(producto);
    }

    public void deleteProducto(int productoId){

        boolean exist = productoRepository.existsById(productoId);

        if(!exist){
            throw new IllegalArgumentException("No existe ese producto");
        }
        productoRepository.deleteById(productoId);

    }

    @Transactional
    public void updateProducto(int productoId,String name,int price,String type,String extraType){
        Producto producto = productoRepository.findById(productoId).orElseThrow(()->new IllegalArgumentException("No existe ese producto"));

        if(producto == null){
            throw new IllegalArgumentException("No existe ese producto");
        }

        if(!name.isEmpty() && !Objects.equals(producto.getName(),name)){
            producto.setName(name);
        }

        if(price > 0 && !Objects.equals(producto.getPrice(), price)){
            producto.setPrice(price);
        }

        if(!type.isEmpty() && !Objects.equals(producto.getType(),type)){
            producto.setType(type);
        }

        if(!extraType.isEmpty() && !Objects.equals(producto.getExtraType(),extraType)){
            producto.setExtraType(extraType);
        }
    }

    @Transactional
    public void updateFrappe(int productoId,int medPrice,int gdePrice,String size){

       Producto producto = productoRepository.findById(productoId).orElse(null);

       prodcutoFrappe productoFrappe = (prodcutoFrappe) producto;

        if(medPrice > 0 && !Objects.equals(productoFrappe.getMedPrice(),medPrice)){
            productoFrappe.setMedPrice(medPrice);
        }

        if(gdePrice > 0 && !Objects.equals(productoFrappe.getGdePrice(),gdePrice)){
            productoFrappe.setGdePrice(gdePrice);
        }

        if(size != null && !Objects.equals(productoFrappe.getSize(),size)){
            productoFrappe.setSize(size);
        }
    }

    @Transactional
    public void updateSmoothieDescription(int productoId,String description){

        Producto producto = productoRepository.findById(productoId).orElseThrow(()->new IllegalArgumentException("No existe ese producto"));

        productoSmoothie productoSmoothie = (productoSmoothie) producto;

        if(description != null && !Objects.equals(productoSmoothie.getDescription(),description)){
            productoSmoothie.setDescription(description);
        }

    }

    @Transactional
    public void updateWaffleDescription(int productoId,String description) {

        Producto producto = productoRepository.findById(productoId).orElseThrow(() -> new IllegalArgumentException("No existe ese producto"));

        productoWaffle productoWaffle = (productoWaffle) producto;

        if(description != null && !Objects.equals(productoWaffle.getDescription(),description)){
            productoWaffle.setDescription(description);
        }

    }

    @Transactional
    public void updateExtras(int productoId, List<Extra> extras){

        Producto producto = productoRepository.findById(productoId).orElseThrow(()->new IllegalArgumentException("No existe ese producto"));

        if(producto instanceof productoWaffle waffle) {
            waffle.setExtras(extras);
        }

        else if(producto instanceof productoSmoothie smoothie) {
            smoothie.setExtras(extras);
        }

        else if(producto instanceof prodcutoFrappe frappe){
            frappe.setExtras(extras);
        }

        else{
            productoWithOneExtra productoWithOneExtra = (productoWithOneExtra) producto;

            productoWithOneExtra.setExtras(extras);
        }
    }
}
