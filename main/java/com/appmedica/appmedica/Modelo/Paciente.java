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
@Table(name = "paciente")
public class Paciente {
   @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "paciente_id_pk")
    private Long pacienteidpk;
    
    @Column(name = "nombre_paciente")
    @NotNull(message = "El campo descripcion no puede estar null")
    private String nombrePaciente;
    
    @Column(name = "apellido_paterno_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String apellidoPaternoPaciente;
    
    @Column(name = "apellido_materno_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String apellidoMaternoPaciente;
    
    @Column(name = "telefono_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private Long telefonoPaciente;
    
    @Column(name = "email_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String emailPaciente;
    
    @Column(name = "fecha_nacimiento_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String fechaNacimientoPaciente;
    
    @Column(name = "genero_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String generoPaciente;
    
    @Column(name = "ciudad_residencia_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String ciudadResidenciaPaciente;
    
    @Column(name = "direccion_residencia_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String direccionResidenciaPaciente;
    
    @Column(name = "codigo_afilicion_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private Long codigoAfiliacionPaciente;
    
    @Column(name = "usuario_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String usuarioPaciente;
    
    @Column(name = "contraseña_paciente")
    @NotNull(message = "El campo costo no puede estar null")
    private String contraseñaPaciente;

    public Paciente(Long pacienteidpk, String nombrePaciente, String apellidoPaternoPaciente, String apellidoMaternoPaciente, Long telefonoPaciente, String emailPaciente, String fechaNacimientoPaciente, String generoPaciente, String ciudadResidenciaPaciente, String direccionResidenciaPaciente, Long codigoAfiliacionPaciente, String usuarioPaciente, String contraseñaPaciente) {
        this.pacienteidpk = pacienteidpk;
        this.nombrePaciente = nombrePaciente;
        this.apellidoPaternoPaciente = apellidoPaternoPaciente;
        this.apellidoMaternoPaciente = apellidoMaternoPaciente;
        this.telefonoPaciente = telefonoPaciente;
        this.emailPaciente = emailPaciente;
        this.fechaNacimientoPaciente = fechaNacimientoPaciente;
        this.generoPaciente = generoPaciente;
        this.ciudadResidenciaPaciente = ciudadResidenciaPaciente;
        this.direccionResidenciaPaciente = direccionResidenciaPaciente;
        this.codigoAfiliacionPaciente = codigoAfiliacionPaciente;
        this.usuarioPaciente = usuarioPaciente;
        this.contraseñaPaciente = contraseñaPaciente;
    }

    public Paciente() {
    }

    public Long getPacienteidpk() {
        return pacienteidpk;
    }

    public void setPacienteidpk(Long pacienteidpk) {
        this.pacienteidpk = pacienteidpk;
    }

    public String getNombrePaciente() {
        return nombrePaciente;
    }

    public void setNombrePaciente(String nombrePaciente) {
        this.nombrePaciente = nombrePaciente;
    }

    public String getApellidoPaternoPaciente() {
        return apellidoPaternoPaciente;
    }

    public void setApellidoPaternoPaciente(String apellidoPaternoPaciente) {
        this.apellidoPaternoPaciente = apellidoPaternoPaciente;
    }

    public String getApellidoMaternoPaciente() {
        return apellidoMaternoPaciente;
    }

    public void setApellidoMaternoPaciente(String apellidoMaternoPaciente) {
        this.apellidoMaternoPaciente = apellidoMaternoPaciente;
    }

    public Long getTelefonoPaciente() {
        return telefonoPaciente;
    }

    public void setTelefonoPaciente(Long telefonoPaciente) {
        this.telefonoPaciente = telefonoPaciente;
    }

    public String getEmailPaciente() {
        return emailPaciente;
    }

    public void setEmailPaciente(String emailPaciente) {
        this.emailPaciente = emailPaciente;
    }

    public String getFechaNacimientoPaciente() {
        return fechaNacimientoPaciente;
    }

    public void setFechaNacimientoPaciente(String fechaNacimientoPaciente) {
        this.fechaNacimientoPaciente = fechaNacimientoPaciente;
    }

    public String getGeneroPaciente() {
        return generoPaciente;
    }

    public void setGeneroPaciente(String generoPaciente) {
        this.generoPaciente = generoPaciente;
    }

    public String getCiudadResidenciaPaciente() {
        return ciudadResidenciaPaciente;
    }

    public void setCiudadResidenciaPaciente(String ciudadResidenciaPaciente) {
        this.ciudadResidenciaPaciente = ciudadResidenciaPaciente;
    }

    public String getDireccionResidenciaPaciente() {
        return direccionResidenciaPaciente;
    }

    public void setDireccionResidenciaPaciente(String direccionResidenciaPaciente) {
        this.direccionResidenciaPaciente = direccionResidenciaPaciente;
    }

    public Long getCodigoAfiliacionPaciente() {
        return codigoAfiliacionPaciente;
    }

    public void setCodigoAfiliacionPaciente(Long codigoAfiliacionPaciente) {
        this.codigoAfiliacionPaciente = codigoAfiliacionPaciente;
    }

    public String getUsuarioPaciente() {
        return usuarioPaciente;
    }

    public void setUsuarioPaciente(String usuarioPaciente) {
        this.usuarioPaciente = usuarioPaciente;
    }

    public String getContraseñaPaciente() {
        return contraseñaPaciente;
    }

    public void setContraseñaPaciente(String contraseñaPaciente) {
        this.contraseñaPaciente = contraseñaPaciente;
    }
    
    
}
