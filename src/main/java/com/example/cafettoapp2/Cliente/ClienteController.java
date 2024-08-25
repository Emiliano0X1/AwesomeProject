package com.example.cafettoapp2.Cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> addCliente(@RequestBody Cliente cliente) {
        System.out.println("Solicitud POST recibida : " + cliente);
        clienteService.addNewCliente(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping(path = "{clienteId}")
    public void deleteCliente(@PathVariable ("clienteId") int clienteId) {
        clienteService.deleteCliente(clienteId);
    }

    @PutMapping(path = "{cliente_id}")
    public void updateCliente(@PathVariable ("cliente_id") Integer clienteId,@RequestParam (required = false) String name,@RequestParam(required = false) Long phoneNumber, @RequestParam (required = false) String location) {
        System.out.println("Solicitud PUT recibida : " + clienteId);
        clienteService.updateCliente(clienteId, name, phoneNumber, location);
    }
}
