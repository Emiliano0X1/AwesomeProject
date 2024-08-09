

package com.example.cafettoapp2.Producto;

import com.example.cafettoapp2.Producto.TypeProducts.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Configuration
public class ProductoConfig {

    @Bean
    CommandLineRunner commandLineRunner(ProductoRepository repo) {
        return args -> {

            if(repo.count()== 0) {

                //Bebidas Calientes
                Producto p1 = new Producto("Americano", 20, "Bebida Caliente", "defaultExtra");
                Producto p2 = new Producto("Expresso", 26, "Bebida Caliente", "defaultExtra");
                Producto p3 = new productoWithOneExtra("Chocolate", 30, "Bebida Caliente", "withMilk", null);
                Producto p4 = new Producto("Capuchino", 36, "Bebida Caliente", "defaultExtra");
                Producto p5 = new Producto("Vainilla", 39, "Bebida Caliente", "defaultExtra");
                Producto p6 = new Producto("Caramelo", 39, "Bebida Caliente", "defaultExtra");
                Producto p7 = new Producto("Amaretto", 39, "Bebida Caliente", "defaultExtra");
                Producto p8 = new productoWithOneExtra("Latte", 36, "Bebida Caliente", "withMilk", null);

                Producto p9 = new Producto("Mocca", 39, "Bebida Caliente", "defaultExtra");
                Producto p10 = new productoWithOneExtra("Chocolate Blanco", 39, "Bebida Caliente", "withMilk", null);
                Producto p11 = new Producto("Crema Irlandesa", 39, "Bebida Caliente", "defaultExtra");
                Producto p12 = new productoWithOneExtra("Chai Latte", 42, "Bebida Caliente", "withMilk", null);
                Producto p13 = new productoWithOneExtra("Matcha Latte", 45, "Bebida Caliente", "withMilk", null);
                Producto p14 = new productoWithOneExtra("Taro", 45, "Bebida Caliente", "withMilk", null);
                Producto p15 = new productoWithOneExtra("Caramelo Latte", 40, "Bebida Caliente", "withMilk", null);
                Producto p16 = new productoWithOneExtra("Vainilla Latte", 40, "Bebida Caliente", "withMilk", null);


                //Frappes

                Producto p17 = new prodcutoFrappe("Capuchino", 0, "Frappe", "", 43, 46, "frappeExtra", null);
                Producto p18 = new prodcutoFrappe("Chaí", 0, "Frappe", "", 47, 50, "frappeExtra", null);
                Producto p19 = new prodcutoFrappe("Chocolate Blanco", 0, "Frappe", "", 46, 49, "frappeExtra", null);
                Producto p20 = new prodcutoFrappe("Fresa", 0, "Frappe", "", 47, 50, "frappeExtra", null);
                Producto p21 = new prodcutoFrappe("Matcha", 0, "Frappe", "", 47, 50, "frappeExtra", null);
                Producto p22 = new prodcutoFrappe("Mazapan", 0, "Frappe", "", 46, 49, "frappeExtra", null);
                Producto p23 = new prodcutoFrappe("Mocha", 0, "Frappe", "", 45, 48, "frappeExtra", null);
                Producto p24 = new prodcutoFrappe("Nutella", 0, "Frappe", "", 47, 50, "frappeExtra", null);
                Producto p25 = new prodcutoFrappe("Orea", 0, "Frappe", "", 46, 49, "frappeExtra", null);
                Producto p26 = new prodcutoFrappe("Taro", 0, "Frappe", "", 47, 50, "frappeExtra", null);

                // Tes

                Producto p27 = new Producto("Relax", 25, "Té", "defaultExtra");
                Producto p28 = new Producto("Té Verde", 25, "Té", "defaultExtra");
                Producto p29 = new Producto("Rooibos Chocomenta", 25, "Té", "defaultExtra");
                Producto p30 = new Producto("Rooibos Mango", 25, "Té", "defaultExtra");

                //Tisanas

                Producto p31 = new Producto("Blue Eyes", 25, "Tisana", "defaultExtra");
                Producto p32 = new Producto("Paraíso Exótico", 25, "Tisana", "defaultExtra");
                Producto p33 = new Producto("Rooibos Chocomenta", 25, "Tisana", "defaultExtra");
                Producto p34 = new Producto("Rooibos Mango", 25, "Tisana", "defaultExtra");

                //Smoothies

                Producto p35 = new productoSmoothie("Piña-Colada", 42, "defaultExtra", "Smoothie", "Piña, leche de coco y yogurt", null);
                Producto p36 = new productoSmoothie("Plátano-Café", 38, "withMilk", "Smoothie", "Plátano, cacao, café y leche de almendras", null);
                Producto p37 = new productoSmoothie("Kiwi", 45, "withMilk", "Smoothie", "Kiwi, plátano, yogurt, leche de almendras", null);
                Producto p38 = new productoSmoothie("Manzana", 50, "withMilk", "Smoothie", "Manzana, yogurt, avena, crema de almendras, leche de almendras", null);
                Producto p39 = new productoSmoothie("Frutos Rojos", 50, "withMilk", "Smoothie", "Fresa, moras, frambuesa y chía", null);
                Producto p40 = new productoSmoothie("Durazno", 45, "withMilk", "Smoothie", "Durazno, manzana, avena y leche de almendras", null);


                //Sodas Italianas

                Producto p41 = new Producto("Manzana Verde", 42, "Soda Italiana", "defaultExtra");
                Producto p42 = new Producto("Mora Azul", 42, "Soda Italiana", "defaultExtra");
                Producto p43 = new Producto("Cereza", 42, "Soda Italiana", "defaultExtra");
                Producto p44 = new Producto("Curacao Azul", 42, "Soda Italiana", "defaultExtra");
                Producto p45 = new Producto("Mango", 42, "Soda Italiana", "defaultExtra");

                //Refrescantes

                Producto p46 = new Producto("Té Helado", 30, "Refrescante", "defaultExtra");
                Producto p47 = new Producto("Té Rojo", 25, "Refrescante", "defaultExtra");
                Producto p48 = new Producto("Botella de Agua", 12, "Refrescante", "defaultExtra");
                Producto p49 = new productoWithOneExtra("Latte En Las Rocas", 36, "Refrescante", "withMilk", null);
                Producto p50 = new Producto("Affogato", 36, "Refrescante", "defaultExtra");

                //Waffles

                Producto p51 = new productoWaffle("Banana Mix", 50, "Waffle", "toppingExtra", null, "Cajeta, plátano, nuez y lechera");
                Producto p52 = new productoWaffle("Cream Chesse", 50, "Waffle", "toppingExtra", null, "Queso philadelphia, durazno y lechera");
                Producto p53 = new productoWaffle("Silvestre", 52, "Waffle", "toppingExtra", null, "Queso philadelphia, mermelada,fresa y lechera");
                Producto p54 = new productoWaffle("Napolitano", 60, "Waffle", "toppingExtra", null, "Nutella, fresa, queso philadelphia y lechera");
                Producto p55 = new productoWaffle("Sanísimo", 55, "Waffle", "toppingExtra", null, "Yogurt natural, kiwi, maple y granola");
                Producto p56 = new productoWaffle("Tropical", 72, "Waffle", "toppingExtra", null, "Durazno, fresa, kiwi, plátano,maple, granola y yogurt");
                Producto p57 = new productoWaffle("Premium", 77, "Waffle", "toppingExtra", null, "Helado de fresa, cereza,fresa, moras y crema batida");
                Producto p58 = new productoWaffle("Ice", 52, "Waffle", "toppingExtra", null, "Helado de vainilla, dulce de leche, plátano y frutillas");
                Producto p59 = new productoWaffle("Fresa", 48, "Waffle-Nutella", "toppingExtra", null, "Nutella + Fruta");
                Producto p60 = new productoWaffle("Plátano", 45, "Waffle-Nutella", "toppingExtra", null, "Nutella + Fruta");
                Producto p61 = new productoWaffle("Durazno", 50, "Waffle-Nutella", "toppingExtra", null, "Nutella + Fruta");
                Producto p62 = new productoWaffle("Kiwi", 50, "Waffle-Nutella", "toppingExtra", null, "Nutella + Fruta");

                //Postres

                Producto p63 = new Producto("Orden Donitas", 27, "Postre", "defaultExtra");
                Producto p64 = new Producto("Volcan de Chocolate", 40, "Postre", "defaultExtra");
                Producto p65 = new Producto("Chispas", 26, "Muffin", "defaultExtra");
                Producto p66 = new Producto("Mora Azul", 26, "Muffin", "defaultExtra");
                Producto p67 = new Producto("Chocolate", 26, "Muffin", "defaultExtra");
                Producto p68 = new Producto("Roles", 26, "Mini", "defaultExtra");
                Producto p69 = new Producto("Brownies", 26, "Mini", "defaultExtra");
                Producto p70 = new Producto("Muffin", 26, "Mini", "defaultExtra");
                Producto p71 = new Producto("Orejitas", 26, "Mini", "defaultExtra");
                Producto p72 = new Producto("Elmo Gigantes", 26, "Galletas", "defaultExtra");


                repo.saveAll(List.of(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72));
            }
        };

    }
}




