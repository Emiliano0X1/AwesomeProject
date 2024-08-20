package com.example.cafettoapp2.Pedido;

import com.example.cafettoapp2.Cliente.Cliente;
import com.example.cafettoapp2.Cliente.ClienteController;
import jakarta.persistence.Id;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("api/v1/pedido")
public class PedidoController {

    private final PedidoService pedidoService;

    @Autowired
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

    @DeleteMapping(path= "pedido_id")
    public void deletePedido(@PathVariable ("pedido_id") Integer pedidoId) {
        pedidoService.deletePedido(pedidoId);
    }

    @PutMapping(path = "{pedido_id}")
    public void updatePedido(@PathVariable ("pedido_id") Integer pedidoId, @RequestParam (required=false) double total, @RequestParam (required=false)LocalDate data,@RequestParam (required=false) String status) {
       pedidoService.updatePedidoData(pedidoId, total, data);
       pedidoService.updatePedidoStatus(pedidoId,status);
    }


}
