package com.example.cafettoapp2.Pedido;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;

    public PedidoService(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    public List<Pedido> getPedidos(){
        return pedidoRepository.findAll();
    }

    public Pedido getPedido(int id){


        return pedidoRepository.findById(id).get();
    }
}
