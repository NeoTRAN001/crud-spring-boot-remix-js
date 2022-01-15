package com.example.demo.repositories;

import com.example.demo.models.EjecutivosModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface EjecutivosRepository extends CrudRepository<EjecutivosModel, Long> {
    public abstract ArrayList<EjecutivosModel> findByDepartamento(String departamento);
    public abstract ArrayList<EjecutivosModel> findByNombre(String nombre);
    public abstract ArrayList<EjecutivosModel> findByDisponibilidad(boolean disponibilidad);
}
