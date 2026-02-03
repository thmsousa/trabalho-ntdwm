package com.example.trabalho_individual;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjetoApplication {

    public static void main(String[] args) {
        // Este comando inicia todo o ecossistema do Spring
        SpringApplication.run(ProjetoApplication.class, args);
        System.out.println("Backend rodando com sucesso na porta 8080!");
    }
}