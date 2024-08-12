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
    public void updateProducto (@PathVariable Integer productoId, @RequestParam (required = false) String name, @RequestParam (required = false) int price, @RequestParam (required = false) String type, @RequestParam (required = false) String extraType ) {
        productoService.updateProducto(productoId, name, price, type, extraType);
    }

    @PutMapping(path = "{productoId}/frappe")
    public void updateFrappe(@PathVariable Integer productoId, @RequestParam (required = false) int medPrice,@RequestParam (required = false) int gdePrice, @RequestParam (required = false) String size, @RequestParam (required = false) List<Extra> extras) {
        productoService.updateFrappe(productoId, medPrice, gdePrice, size);
        productoService.updateExtras(productoId,extras);
    }

    @PutMapping(path = "{productoId}/Smoothie")
    public void updateSmoothie (@PathVariable Integer productoId,@RequestParam (required = false) String description,@RequestParam (required = false) String size, @RequestParam (required = false) List<Extra> extras) {
        productoService.updateSmoothieDescription(productoId, description);
        productoService.updateExtras(productoId,extras);
    }

    @PutMapping(path = "{productoId}/Waffle")
    public void updateWaffle (@PathVariable Integer productoId, @RequestParam (required = false) String description, @RequestParam (required = false) String size, @RequestParam (required = false) List<Extra> extras) {
        productoService.updateWaffleDescription(productoId, description);
        productoService.updateExtras(productoId,extras);
    }

    @PutMapping(path = "{productoId}/WithOneExtra")
    public void updateWithOneExtra (@PathVariable Integer productoId, @RequestParam (required = false) List<Extra> extras) {
        productoService.updateExtras(productoId,extras);
    }









}
