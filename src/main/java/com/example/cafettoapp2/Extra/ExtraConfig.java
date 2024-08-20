package com.example.cafettoapp2.Extra;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import java.util.List;

@Configuration
public class ExtraConfig {

    @Bean(name = "extraBean")
    CommandLineRunner commandLineRunner(ExtraRepository extraRepository) {
        return args -> {

            System.out.println("Iniciando esta madre");

            if(extraRepository.count() == 0) {
                Extra e1 = new Extra("Entera","entera", 0, "Leche");
                Extra e2 = new Extra("Deslactosada","deslactosada", 6, "Leche");
                Extra e3 = new Extra("Almendras","almendras", 3, "Leche");
                Extra e4 = new Extra("Linaza","linaza", 3, "Leche");
                Extra e5 = new Extra("Avena","avena", 6, "Leche");

                Extra e6 = new Extra("Con Crema Extra","true", 5, "Crema");
                Extra e7 = new Extra("Sin Crema Extra","false", 0, "Crema");

                Extra e8 = new Extra("Oreo","oreo", 6, "Topping");
                Extra e9 = new Extra("Lunetas","lunetas", 6, "Topping");
                Extra e10 = new Extra("Frutas Extras","frutas extras", 6, "Topping");
                Extra e11 = new Extra("Almendras Fileteadas","almendras fileteadas", 6, "Topping");
                Extra e12 = new Extra("Crema Batida","crema batida", 6, "Topping");
                Extra e13 = new Extra("Bola de Helado","bola de helado", 6, "Topping");


                extraRepository.saveAll(List.of(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13));
            }
        };
    }
}
