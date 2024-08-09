package com.example.cafettoapp2.Cliente;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public List<Cliente> getCliente() {
        return clienteRepository.findAll();
    }

    public Cliente addNewCliente(Cliente cliente) {

        Optional<Cliente> clienteByPhoneNumber = clienteRepository.findByPhoneNumber(cliente.getPhoneNumber());

        if (clienteByPhoneNumber.isPresent()) {
            return clienteByPhoneNumber.get();
        }

        return clienteRepository.save(cliente);
    }







}
