/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.appmedica.appmedica.Service;

import com.appmedica.appmedica.Modelo.MedicoGeneral;
import java.util.List;

public interface ServiceMedicoGeneral {
    
    List<MedicoGeneral> getListaMedicoGeneral();
    MedicoGeneral crearMedicoGeneral(MedicoGeneral medicoGeneral);
    MedicoGeneral ActualizarMedicoGeneral(MedicoGeneral medicoGeneral);
    Boolean EliminarMedicoGeneral(Long id);
}
