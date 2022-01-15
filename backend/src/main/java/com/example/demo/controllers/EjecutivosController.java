package com.example.demo.controllers;

import com.example.demo.models.EjecutivosModel;
import com.example.demo.services.EjecutivosService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/ejecutivos")
public class EjecutivosController {
    final EjecutivosService ejecutivosService;

    public EjecutivosController(EjecutivosService ejecutivosService) {
        this.ejecutivosService = ejecutivosService;
    }

    @GetMapping()
    public ArrayList<EjecutivosModel> obtenerTodosLosUsuarios() {
        return ejecutivosService.obtenerTodosLosEjecutivos();
    }

    @GetMapping(path = "/{id}")
    public Optional<EjecutivosModel> obtenerUnEjecutivoPorId(@PathVariable("id") Long id) {
        return this.ejecutivosService.obtenerEjecutivoPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<EjecutivosModel> obtenerEjecutivosPorNombreDepartamentoDisponibilidad(
            @RequestParam(value = "nombre", required = false) String nombre,
            @RequestParam(value = "departamento", required = false) String departamento,
            @RequestParam(value = "disponibilidad", required = false) boolean disponibilidad
    ) {
        if(nombre != null) {
            return this.ejecutivosService.obtenerEjecutivosPorNombre(nombre);
        }

        if(departamento != null) {
            return this.ejecutivosService.obtenerEjecutivosPorDepartamento(departamento);
        }

        return this.ejecutivosService.obtenerEjecutivosPorDisponibilidad(disponibilidad);
    }

    @PostMapping()
    public EjecutivosModel guardarEjecutivo(@RequestBody EjecutivosModel ejecutivo) {
        return this.ejecutivosService.guardarEjecutivo(ejecutivo);
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarEjecutivo(@PathVariable("id") Long id) {
        return this.ejecutivosService.eliminarEjecutivoPorId(id);
    }
}
