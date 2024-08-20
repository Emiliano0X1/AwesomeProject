package com.example.cafettoapp2.Cliente;

import com.example.cafettoapp2.Pedido.Pedido;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table
public class Cliente {

    @Id
    @SequenceGenerator(name = "cliente_sequence", sequenceName = "cliente_sequence" , allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "cliente_sequence")
    private int id;
    private String name;
    private Long phoneNumber;
    private String location;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "pedido_id")
    private List <Pedido> pedidos;

    public Cliente() {}

    public Cliente(String name, Long phoneNumber, String location) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.pedidos = null;
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

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<Pedido> getPedidos() {
        return pedidos;
    }

    public void setPedidos(List<Pedido> pedidos) {
        this.pedidos = pedidos;
    }
}
