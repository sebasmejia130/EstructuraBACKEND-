/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.Modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ordenesremision") 
public class OrdenesRemisiones {
     
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "orden_id_pk")
    private Long ordenidpk; 
    
    @Column(name = "tipo_examen",nullable = false) 
    private String tipoExamen; 
    
    @Column(name = "lugar_procedimiento",nullable = false) 
    private String lugarProcedimiento;
    
    @Column(name = "fecha_procedimiento",nullable = false) 
    private String fechaProcedimiento;
   
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "orden_idpaciente_fk")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Paciente paciente; // 
    
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "inv_idmedico_fk")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private MedicoGeneral medicoGeneral;

    public OrdenesRemisiones() {
    }

    public OrdenesRemisiones(Long ordenidpk, String tipoExamen, String lugarProcedimiento, String fechaProcedimiento, Paciente paciente, MedicoGeneral medicoGeneral) {
        this.ordenidpk = ordenidpk;
        this.tipoExamen = tipoExamen;
        this.lugarProcedimiento = lugarProcedimiento;
        this.fechaProcedimiento = fechaProcedimiento;
        this.paciente = paciente;
        this.medicoGeneral = medicoGeneral;
    }

    public Long getOrdenidpk() {
        return ordenidpk;
    }

    public void setOrdenidpk(Long ordenidpk) {
        this.ordenidpk = ordenidpk;
    }

    public String getTipoExamen() {
        return tipoExamen;
    }

    public void setTipoExamen(String tipoExamen) {
        this.tipoExamen = tipoExamen;
    }

    public String getLugarProcedimiento() {
        return lugarProcedimiento;
    }

    public void setLugarProcedimiento(String lugarProcedimiento) {
        this.lugarProcedimiento = lugarProcedimiento;
    }

    public String getFechaProcedimiento() {
        return fechaProcedimiento;
    }

    public void setFechaProcedimiento(String fechaProcedimiento) {
        this.fechaProcedimiento = fechaProcedimiento;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public MedicoGeneral getMedicoGeneral() {
        return medicoGeneral;
    }

    public void setMedicoGeneral(MedicoGeneral medicoGeneral) {
        this.medicoGeneral = medicoGeneral;
    }
    
    
}
