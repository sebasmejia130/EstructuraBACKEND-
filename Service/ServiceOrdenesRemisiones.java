/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.appmedica.appmedica.Service;

import com.appmedica.appmedica.Modelo.OrdenesRemisiones;
import java.util.List;

public interface ServiceOrdenesRemisiones {
    
    List<OrdenesRemisiones> getListaOrdenesRemisiones();
    OrdenesRemisiones crearOrdenesRemisiones(OrdenesRemisiones ordenesRemisiones);
    OrdenesRemisiones ActualizarOrdenesRemisiones(OrdenesRemisiones ordenesRemisiones);
    Boolean EliminarOrdenesRemisiones(Long id);
    
}