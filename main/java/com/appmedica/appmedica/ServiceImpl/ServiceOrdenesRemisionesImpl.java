/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.ServiceImpl;

import com.appmedica.appmedica.Dao.OrdenesRemisionesDao;
import com.appmedica.appmedica.Modelo.OrdenesRemisiones;
import com.appmedica.appmedica.Service.ServiceOrdenesRemisiones;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceOrdenesRemisionesImpl implements ServiceOrdenesRemisiones {
    @Autowired
    private OrdenesRemisionesDao getDao;
    
    @Override
    public List<OrdenesRemisiones> getListaOrdenesRemisiones() {
        return getDao.findAll();
    }
    @Override
    public OrdenesRemisiones crearOrdenesRemisiones(OrdenesRemisiones ordenesRemisiones) {
        if(ordenesRemisiones != null){
            return getDao.save(ordenesRemisiones);
        }
        return null;
    }
    @Override
    public OrdenesRemisiones ActualizarOrdenesRemisiones(OrdenesRemisiones ordenesRemisiones) {
        if(ordenesRemisiones != null && ordenesRemisiones.getOrdenidpk() != 0){
            OrdenesRemisiones ordenesRemisionesBD = getDao.getReferenceById(ordenesRemisiones.getOrdenidpk());
            if(ordenesRemisionesBD != null){
                ordenesRemisionesBD.setTipoExamen(ordenesRemisiones.getTipoExamen());
                ordenesRemisionesBD.setLugarProcedimiento(ordenesRemisiones.getLugarProcedimiento());
                ordenesRemisionesBD.setFechaProcedimiento(ordenesRemisiones.getFechaProcedimiento());
                return getDao.save(ordenesRemisionesBD);
            } 
        }
        return null;
    }
    @Override
    public Boolean EliminarOrdenesRemisiones(Long id) {
          if(id != null && id != 0){
            OrdenesRemisiones ordenesRemisionesBD = getDao.getReferenceById(id);
            if(ordenesRemisionesBD != null){
                getDao.deleteById(id);
                 return true;
            }
          }
           return false;
    }

   

    
}
    
    
