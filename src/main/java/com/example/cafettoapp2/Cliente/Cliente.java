package com.example.cafettoapp2.Cliente;

import com.example.cafettoapp2.Pedido.Pedido;
import jakarta.persistence.*;

import java.time.LocalDate;


@Entity
@Table
public class Cliente {

    @Id
    @SequenceGenerator(name = "cliente_sequence", sequenceName = "cliente_sequence" , allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "cliente_sequence")
    private int id;
    private String name;
    private int phoneNumber;
    private LocalDate fecha;
    private String location;

    @OneToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    public Cliente() {}

    public Cliente(String name, int phoneNumber, LocalDate fecha, String location) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.fecha = fecha;
        this.location = location;
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

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
