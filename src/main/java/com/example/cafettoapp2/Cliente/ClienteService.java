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

        Optional<Cliente> clienteByPhoneNumber = clienteRepository.findByPhoneNumber(cliente.getPhoneNumber());

        if (clienteByPhoneNumber.isPresent()) {
            return clienteByPhoneNumber.get();
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

    public void updateCliente(int clienteId, String name,int phoneNumber,String location) {

        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow(() -> new IllegalStateException("No existe el Cliente con id " + clienteId));

        if(name != null && !name.isEmpty() && !Objects.equals(cliente.getName(),name)) {
            cliente.setName(name);
        }

        if(String.valueOf(phoneNumber).length() != 10 && !Objects.equals(cliente.getPhoneNumber(),phoneNumber) ){

            Optional<Cliente> clienteByPhoneNumber = clienteRepository.findByPhoneNumber(phoneNumber);

            if (clienteByPhoneNumber.isPresent()) {
                throw new IllegalStateException("El Cliente con id " + clienteId + " ya existe");
            }

            cliente.setPhoneNumber(phoneNumber);
        }

        if(location != null && !location.isEmpty() && !Objects.equals(cliente.getLocation(),location)) {
            cliente.setLocation(location);
        }


    }

    public void updateCLientePedido(int clienteId, Pedido pedido) {

        Cliente cliente = clienteRepository.findById(clienteId).orElseThrow(() -> new IllegalStateException("No existe el Cliente con id " + clienteId));

        if(pedido != null && !Objects.equals(cliente.getPedido(),pedido)) {
            cliente.setPedido(pedido);
        }
    }







}
