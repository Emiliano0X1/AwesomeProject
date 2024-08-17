package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Extra.Extra;
import com.example.cafettoapp2.Extra.ExtraRepository;
import com.example.cafettoapp2.Producto.TypeProducts.*;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;
    private final ExtraRepository extraRepository;

    public ProductoService(ProductoRepository productoRepository, ExtraRepository extraRepository) {
        this.productoRepository = productoRepository;
        this.extraRepository = extraRepository;
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
    public void updateFrappe(int productoId,String size,List<Extra> extras){

       Producto producto = productoRepository.findById(productoId).orElse(null);

       prodcutoFrappe productoFrappe = (prodcutoFrappe) producto;

        System.out.println(productoFrappe.getMedPrice());
        System.out.println(productoFrappe.getGdePrice());

        if(size != null && Objects.equals(size, "Mediano")){
            producto.setPrice(productoFrappe.getMedPrice());
        }

        else{
            producto.setPrice(productoFrappe.getGdePrice());
        }

        List<Extra> finalExtras = new ArrayList<>();
        for(Extra extra : extras) {
            if (extra != null && !extras.isEmpty()) {

                Extra extra1 = extraRepository.findById(extra.getId()).orElseThrow(()->new IllegalArgumentException("No existe ese extra"));
                finalExtras.add(extra1);
            }

        }

        productoFrappe.setExtras(finalExtras);

        productoFrappe.setSize(size);
        productoRepository.save(productoFrappe);
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
