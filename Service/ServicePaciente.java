/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.appmedica.appmedica.Service;

import com.appmedica.appmedica.Modelo.Paciente;
import java.util.List;

public interface ServicePaciente {
    List<Paciente> getListaPaciente();
    Paciente crearPaciente(Paciente paciente);
    Paciente ActualizarPaciente(Paciente paciente);
    Boolean EliminarPaciente(Long id);
    
}
