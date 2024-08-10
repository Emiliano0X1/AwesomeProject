package com.example.cafettoapp2.Pedido;

import com.example.cafettoapp2.Cliente.ClienteController;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/pedido")
public class PedidoController {

    @Autowired
    private final PedidoService pedidoService;


    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @GetMapping
    public void getPedido(int pedidoId) {
        pedidoService.getPedido(pedidoId);
    }

    @PostMapping("/cliente/{clienteId}")
    public void createPedido(@RequestBody Pedido pedido,@PathVariable Integer clienteId) {
        pedidoService.addNewPedido(pedido, clienteId);
    }
}
