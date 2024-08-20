package com.example.cafettoapp2.Pedido;


import com.example.cafettoapp2.Cliente.Cliente;
import com.example.cafettoapp2.Cliente.ClienteRepository;
import com.example.cafettoapp2.Cliente.ClienteService;
import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final ClienteRepository clienteRepository;

    public PedidoService(PedidoRepository pedidoRepository, ClienteRepository clienteRepository) {
        this.pedidoRepository = pedidoRepository;
        this.clienteRepository = clienteRepository;
    }

    //Getter Methods
    public List<Pedido> getPedidos(){
        return pedidoRepository.findAll();
    }

    public Pedido getPedido(int id){
        return pedidoRepository.findById(id).get();
    }

    //Post Methods
    public void addNewPedido(Pedido pedido,int clienteId){
        if(pedido.getProducto() == null){
            throw new IllegalStateException("El pedido no tiene productos");
        }

        Optional<Cliente> cliente = clienteRepository.findById(clienteId);

        if(!cliente.isPresent()){
           throw new IllegalStateException("El cliente no existe");
        }

        pedido.setCliente(cliente.get());

        pedidoRepository.save(pedido);

    }

    //Delete

    public void deletePedido(int pedidoId){
        boolean exist = pedidoRepository.existsById(pedidoId);
        if(!exist){
            throw new IllegalStateException("El pedido no existe");
        }
        pedidoRepository.deleteById(pedidoId);
    }

    // Put
    @Transactional
    public void updatePedidoData(int pedidoId, double total, LocalDate localDate){

        Pedido pedido = pedidoRepository.findById(pedidoId).orElseThrow(() -> new IllegalStateException("El pedido no existe"));

        if(total < 0){
            throw new IllegalStateException("El total no puede ser 0");
        }

        if(total != 0 && !Objects.equals(pedido.getTotal(),total)){
            pedido.setTotal(total);
        }

        if(localDate != null && !Objects.equals(pedido.getData(),localDate)){
            pedido.setData(localDate);
        }

    }

    @Transactional
    public void updateProductoPedido(int pedidoId,List<Producto> productos){

        Pedido pedido = pedidoRepository.findById(pedidoId).orElseThrow(() -> new IllegalStateException("El pedido no existe"));
        if(!productos.isEmpty()){
            pedido.setProducto(productos);
        }
    }

    @Transactional
    public void updatePedidoStatus(int pedidoId,String status){

        Pedido pedido = pedidoRepository.findById(pedidoId).orElseThrow(() -> new IllegalStateException("El pedido no existe"));

        if(!Objects.equals(pedido.getStatus(),status)){
            pedido.setStatus(status);
        }
    }
}
