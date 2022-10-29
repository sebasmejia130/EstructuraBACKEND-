/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.ServiceImpl;

import com.appmedica.appmedica.Dao.PacienteDao;
import com.appmedica.appmedica.Modelo.Paciente;
import com.appmedica.appmedica.Service.ServicePaciente;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicePacienteImpl implements ServicePaciente {
    
    @Autowired
    private PacienteDao getDao;

    @Override
    public List<Paciente> getListaPaciente() {
        return getDao.findAll();
    }
    @Override
    public Paciente crearPaciente(Paciente paciente) {
        if (paciente != null) {
            return getDao.save(paciente);
        }
        return null;
    }
    @Override
    public Paciente ActualizarPaciente(Paciente paciente) {
        if (paciente != null && paciente.getPacienteidpk() != 0) {
            Paciente pacienteBD = getDao.getReferenceById(paciente.getPacienteidpk());
            if (pacienteBD != null) {
                pacienteBD.setNombrePaciente(paciente.getNombrePaciente());
                pacienteBD.setApellidoPaternoPaciente(paciente.getApellidoPaternoPaciente());
                pacienteBD.setApellidoMaternoPaciente(paciente.getApellidoMaternoPaciente());
                pacienteBD.setTelefonoPaciente(paciente.getTelefonoPaciente());
                pacienteBD.setEmailPaciente(paciente.getEmailPaciente());
                pacienteBD.setFechaNacimientoPaciente(paciente.getFechaNacimientoPaciente());
                pacienteBD.setGeneroPaciente(paciente.getGeneroPaciente());
                pacienteBD.setCiudadResidenciaPaciente(paciente.getCiudadResidenciaPaciente());
                pacienteBD.setDireccionResidenciaPaciente(paciente.getDireccionResidenciaPaciente());
                pacienteBD.setCodigoAfiliacionPaciente(paciente.getCodigoAfiliacionPaciente());
                pacienteBD.setUsuarioPaciente(paciente.getUsuarioPaciente());
                pacienteBD.setContraseñaPaciente(paciente.getContraseñaPaciente());
                return getDao.save(pacienteBD);
            }
        }
        return null;
    }
    @Override
    public Boolean EliminarPaciente(Long id) {
 
        if(id != null && id != 0){
            Paciente pacienteBD = getDao.getReferenceById(id);
            if(pacienteBD != null){
                getDao.deleteById(id);
                 return true;
            }
          }
           return false;
    }

}
