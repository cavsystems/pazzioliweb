package com.pazzioliweb.comprasmodule;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ComprasModuleApplication {
    public static void main(String[] args) {
        SpringApplication.run(ComprasModuleApplication.class, args);
    }
}
