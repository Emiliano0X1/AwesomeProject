package com.example.cafettoapp2.Cliente;

import com.example.cafettoapp2.Pedido.Pedido;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    //Get Methods
    public List<Cliente> getCliente() {
        return clienteRepository.findAll();
    }

    //POST Methods

    public Cliente addNewCliente(Cliente cliente) {

        Optional<Cliente> clienteById = clienteRepository.findByEmail(cliente.getEmail());

        if(clienteById.isPresent()) {
            throw new IllegalStateException("Este cliente ya existe");
        }

        return clienteRepository.save(cliente);
    }

    //DELETE

    public void deleteCliente(int clienteId) {

        boolean exist = clienteRepository.existsById(clienteId);

        if (!exist) {
            throw new IllegalStateException("No existe el Cliente con id " + clienteId);
        }
        clienteRepository.deleteById(clienteId);
    }

    // PUT

    public void updateCliente(int clienteId, String name,Long phoneNumber,String location) {


        System.out.println("Actualizando cliente con ID: " + clienteId);
        System.out.println("Nombre: " + name);
        System.out.println("Teléfono: " + phoneNumber);
        System.out.println("Ubicación: " + location);


        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow(() -> new IllegalStateException("No existe el Cliente con id " + clienteId));

        if(name != null && !name.isEmpty() && !Objects.equals(cliente.getName(),name)) {
            cliente.setName(name);
        }

        if(!String.valueOf(phoneNumber).isEmpty() && !Objects.equals(cliente.getPhoneNumber(),phoneNumber) ){

            Optional<Cliente> clienteByPhoneNumber = clienteRepository.findByPhoneNumber(phoneNumber);

            if (clienteByPhoneNumber.isPresent()) {
                throw new IllegalStateException("El Cliente con id " + clienteId + " ya existe");
            }

            cliente.setPhoneNumber(phoneNumber);
        }

        if(location != null && !location.isEmpty() && !Objects.equals(cliente.getLocation(),location)) {
            cliente.setLocation(location);
        }

        clienteRepository.save(cliente);

        System.out.println("Id del cliente: " + cliente.getId());
        System.out.println("Nombre Nuevo: " + cliente.getName());
        System.out.println("Teléfono: " + cliente.getPhoneNumber());
        System.out.println("Ubicación: " + cliente.getLocation());


    }

    public void updateCLientePedido(int clienteId, Pedido pedido) {

        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow(() -> new IllegalStateException("No existe el Cliente con id " + clienteId));

        if(pedido != null && !Objects.equals(cliente.getPedidos().get(pedido.getId()),pedido)) {
            cliente.getPedidos().get(pedido.getId());
        }
    }







}
