package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Extra.Extra;
import com.example.cafettoapp2.Producto.TypeProducts.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/producto")
public class ProductoController {

    private final ProductoService productoService;

    @Autowired
    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public List<Producto> getProductos () {
        return productoService.getProducto();
    }

    @PostMapping
    public void addNewProducto (@RequestBody Producto producto) {
        productoService.addNewProducto(producto);
    }

    @DeleteMapping(path = "{productoId}")
    public void deleteProducto (@PathVariable ("productoId") Integer productoId) {
        productoService.deleteProducto(productoId);
    }

    @PutMapping(path = "{productoId}")
    public void updateFrappe(@PathVariable Integer productoId, @RequestParam (required = false) String size, @RequestBody List<Extra> extras) {
        productoService.updateFrappe(productoId,size,extras);
    }

    @PutMapping(path = "{productoId}/extra")
    public void updateWithOneExtra (@PathVariable Integer productoId,@RequestParam (required = false) boolean status, @RequestBody List<Extra> extras) {
        productoService.updateExtras(productoId,extras);
    }









}
