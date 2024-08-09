package com.example.cafettoapp2.Cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/cliente")
public class ClienteController {

    private final ClienteService clienteService;

    @Autowired
    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public List<Cliente> listaCliente() {
        return clienteService.getCliente();
    }

    @PostMapping
    public void addCliente(@RequestBody Cliente cliente) {
        System.out.println("Solicitud POST recibida : " + cliente);
        clienteService.addNewCliente(cliente);
    }
}
