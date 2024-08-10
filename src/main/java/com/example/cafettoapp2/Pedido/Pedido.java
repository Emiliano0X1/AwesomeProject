package com.example.cafettoapp2.Pedido;

import com.example.cafettoapp2.Cliente.Cliente;
import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.*;
import java.util.List;

@Entity
@Table
public class Pedido {

    @Id
    @SequenceGenerator(name = "pedido_sequence", sequenceName = "pedido_sequence" , allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "pedido_sequence")
    private int id;
    private double total;
    private boolean status;
    private LocalDate data;

    @ManyToMany
    @JoinTable(
            name="pedido_producto",
            joinColumns = @JoinColumn(name = "pedido_id"),
            inverseJoinColumns = @JoinColumn(name = "producto_id")
    )
    private List<Producto> producto = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    public Pedido() {}

    public Pedido(double total, boolean status,LocalDate data, List<Producto> productos, Cliente cliente) {
        this.total = total;
        this.status = status;
        this.producto = productos;
        this.data = data;
        this.cliente = cliente;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public List<Producto> getProducto() {
        return producto;
    }

    public void setProducto(List<Producto> producto) {
        this.producto = producto;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }
}
