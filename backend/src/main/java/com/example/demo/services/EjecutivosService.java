package com.example.demo.services;

import com.example.demo.models.EjecutivosModel;
import com.example.demo.repositories.EjecutivosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class EjecutivosService {
    @Autowired
    EjecutivosRepository ejecutivosRepository;

    public ArrayList<EjecutivosModel> obtenerTodosLosEjecutivos(){
        return (ArrayList<EjecutivosModel>) ejecutivosRepository.findAll();
    }

    public Optional<EjecutivosModel> obtenerEjecutivoPorId(Long id) {
        return ejecutivosRepository.findById(id);
    }

    public ArrayList<EjecutivosModel> obtenerEjecutivosPorNombre(String nombre) {
        return ejecutivosRepository.findByNombre(nombre);
    }

    public ArrayList<EjecutivosModel> obtenerEjecutivosPorDepartamento(String departamento) {
        return ejecutivosRepository.findByDepartamento(departamento);
    }

    public ArrayList<EjecutivosModel> obtenerEjecutivosPorDisponibilidad(boolean disponibilidad) {
        return ejecutivosRepository.findByDisponibilidad(disponibilidad);
    }

    public EjecutivosModel guardarEjecutivo(EjecutivosModel ejecutivo) {
        return ejecutivosRepository.save(ejecutivo);
    }

    public boolean eliminarEjecutivoPorId(Long id) {
        try {
            ejecutivosRepository.deleteById(id);
        } catch (Exception err) {
            return false;
        }

        return true;
    }
}
