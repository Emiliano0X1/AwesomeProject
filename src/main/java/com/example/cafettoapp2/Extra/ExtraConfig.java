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
                Extra e1 = new Extra("Entera", 0, "Leche", true);
                Extra e2 = new Extra("Deslactosada", 6, "Leche", false);
                Extra e3 = new Extra("Almendras", 3, "Leche", false);
                Extra e4 = new Extra("Linaza", 3, "Leche", false);
                Extra e5 = new Extra("Avena", 6, "Leche", false);

                Extra e6 = new Extra("Con Crema Extra", 5, "Crema", false);
                Extra e7 = new Extra("Sin Crema Extra", 0, "Crema", true);

                Extra e8 = new Extra("Oreo", 6, "Topping", false);
                Extra e9 = new Extra("Lunetas", 6, "Topping", false);
                Extra e10 = new Extra("Frutas Extras", 6, "Topping", false);
                Extra e11 = new Extra("Almendras Fileteadas", 6, "Topping", false);
                Extra e12 = new Extra("Crema Batida", 6, "Topping", false);
                Extra e13 = new Extra("Bola de Helado", 6, "Topping", false);


                extraRepository.saveAll(List.of(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13));
            }
        };
    }
}
