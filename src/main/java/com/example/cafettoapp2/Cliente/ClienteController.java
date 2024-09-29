package com.example.cafettoapp2.Cliente;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


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

    /*
    @GetMapping("/csrf-token")
    public CsrfToken csrfToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }


     */

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> login) {

        String email = login.get("email");
        String password = login.get("password");

        if(clienteService.verifyCliente(email, password)) {
            return ResponseEntity.ok("Login Exitoso");
        }

        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente) {
        System.out.println("Solicitud POST recibida : " + cliente);
        Cliente newCliente = clienteService.addNewCliente(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCliente);
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
