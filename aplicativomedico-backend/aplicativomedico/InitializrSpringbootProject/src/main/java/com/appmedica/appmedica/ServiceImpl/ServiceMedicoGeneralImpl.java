/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.ServiceImpl;

import com.appmedica.appmedica.Dao.MedicoGeneralDao;
import com.appmedica.appmedica.Modelo.MedicoGeneral;
import com.appmedica.appmedica.Service.ServiceMedicoGeneral;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceMedicoGeneralImpl implements ServiceMedicoGeneral {
    
    @Autowired
    private MedicoGeneralDao getDao;

    @Override
    public List<MedicoGeneral> getListaMedicoGeneral() {
        return getDao.findAll();
    }
    @Override
    public MedicoGeneral crearMedicoGeneral(MedicoGeneral medicoGeneral) {
        if (medicoGeneral != null) {
            return getDao.save(medicoGeneral);
        }
        return null;
    }
    @Override
    public MedicoGeneral ActualizarMedicoGeneral(MedicoGeneral medicoGeneral) {
        if (medicoGeneral != null && medicoGeneral.getIdpk() != 0) {
            MedicoGeneral medicoGeneralBD = getDao.getReferenceById(medicoGeneral.getIdpk());
            if (medicoGeneralBD != null) {
                medicoGeneralBD.setNombreMedico(medicoGeneral.getNombreMedico());
                medicoGeneralBD.setApellidoPaternoMedico(medicoGeneral.getApellidoPaternoMedico());
                medicoGeneralBD.setApellidoMaternoMedico(medicoGeneral.getApellidoMaternoMedico());
                medicoGeneralBD.setTelefonoMedico(medicoGeneral.getTelefonoMedico());
                medicoGeneralBD.setAreaMedico(medicoGeneral.getAreaMedico());
                medicoGeneralBD.setGeneroMedico(medicoGeneral.getGeneroMedico());
                medicoGeneralBD.setRemision(medicoGeneral.getRemision());
                medicoGeneralBD.setUsuarioMedico(medicoGeneral.getUsuarioMedico());
                medicoGeneralBD.setContraseñaMedico(medicoGeneral.getContraseñaMedico());
                return getDao.save(medicoGeneralBD);
            }
        }
        return null;
    }

    @Override
    public Boolean EliminarMedicoGeneral(Long id) {
        if (id != null && id != 0) {
            MedicoGeneral medicoGeneralBD = getDao.getReferenceById(id);
            if (medicoGeneralBD != null) {
                getDao.deleteById(id);
                return true;
            }
        }
        return false;
    }

}
