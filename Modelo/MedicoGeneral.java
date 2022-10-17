/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "MedicoGeneral")
public class MedicoGeneral {
@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_medico_pk")
    private Long idpk;
    
    @Column(name = "nombre_medico")
    @NotNull(message = "El campo descripcion no puede estar null")
    private String nombreMedico;
    
    @Column(name = "apellido_paterno_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String apellidoPaternoMedico;
    
    @Column(name = "apellido_materno_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String apellidoMaternoMedico;
    
    @Column(name = "telefono_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private long telefonoMedico;
    
    @Column(name = "area_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String areaMedico;

    @Column(name = "genero_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String generoMedico;
    
    @Column(name = "remision")
    @NotNull(message = "El campo costo no puede estar null")
    private String remision;
    
    @Column(name = "usuario_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String usuarioMedico;
    
    @Column(name = "contraseña_medico")
    @NotNull(message = "El campo costo no puede estar null")
    private String ContraseñaMedico;

    public MedicoGeneral() {
    }

    public MedicoGeneral(Long idpk, String nombreMedico, String apellidoPaternoMedico, String apellidoMaternoMedico, long telefonoMedico, String areaMedico, String generoMedico, String remision, String usuarioMedico, String ContraseñaMedico) {
        this.idpk = idpk;
        this.nombreMedico = nombreMedico;
        this.apellidoPaternoMedico = apellidoPaternoMedico;
        this.apellidoMaternoMedico = apellidoMaternoMedico;
        this.telefonoMedico = telefonoMedico;
        this.areaMedico = areaMedico;
        this.generoMedico = generoMedico;
        this.remision = remision;
        this.usuarioMedico = usuarioMedico;
        this.ContraseñaMedico = ContraseñaMedico;
    }

    public Long getIdpk() {
        return idpk;
    }

    public void setIdpk(Long idpk) {
        this.idpk = idpk;
    }

    public String getNombreMedico() {
        return nombreMedico;
    }

    public void setNombreMedico(String nombreMedico) {
        this.nombreMedico = nombreMedico;
    }

    public String getApellidoPaternoMedico() {
        return apellidoPaternoMedico;
    }

    public void setApellidoPaternoMedico(String apellidoPaternoMedico) {
        this.apellidoPaternoMedico = apellidoPaternoMedico;
    }

    public String getApellidoMaternoMedico() {
        return apellidoMaternoMedico;
    }

    public void setApellidoMaternoMedico(String apellidoMaternoMedico) {
        this.apellidoMaternoMedico = apellidoMaternoMedico;
    }

    public long getTelefonoMedico() {
        return telefonoMedico;
    }

    public void setTelefonoMedico(long telefonoMedico) {
        this.telefonoMedico = telefonoMedico;
    }

    public String getAreaMedico() {
        return areaMedico;
    }

    public void setAreaMedico(String areaMedico) {
        this.areaMedico = areaMedico;
    }

    public String getGeneroMedico() {
        return generoMedico;
    }

    public void setGeneroMedico(String generoMedico) {
        this.generoMedico = generoMedico;
    }

    public String getRemision() {
        return remision;
    }

    public void setRemision(String remision) {
        this.remision = remision;
    }

    public String getUsuarioMedico() {
        return usuarioMedico;
    }

    public void setUsuarioMedico(String usuarioMedico) {
        this.usuarioMedico = usuarioMedico;
    }

    public String getContraseñaMedico() {
        return ContraseñaMedico;
    }

    public void setContraseñaMedico(String ContraseñaMedico) {
        this.ContraseñaMedico = ContraseñaMedico;
    }

    
    
    
        
}
