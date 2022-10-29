/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.appmedica.appmedica.Controller;

import com.appmedica.appmedica.Modelo.OrdenesRemisiones;
import com.appmedica.appmedica.ServiceImpl.ServiceOrdenesRemisionesImpl;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@CrossOrigin(origins={"http://127.0.0.1:5502"})
@RequestMapping(value = "/ordenesRemisiones")
public class OrdenesRemisionesController {
    @Autowired
    private ServiceOrdenesRemisionesImpl serviceOrdenesRemisiones;
    
    @GetMapping(value = "")
    public ResponseEntity<List<OrdenesRemisiones>> ListaOrdenesRemisiones(){
        List<OrdenesRemisiones> lista = serviceOrdenesRemisiones.getListaOrdenesRemisiones();
        return ResponseEntity.ok(lista);
    }
    
    @PostMapping(value = "")
    public ResponseEntity<OrdenesRemisiones> CrearOrdenesRemisiones(@Valid @RequestBody OrdenesRemisiones 
            ordenesRemisiones,BindingResult result){
        if(result.hasErrors()){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND,result.getFieldError()
                    .getDefaultMessage());
        }
        OrdenesRemisiones crear = serviceOrdenesRemisiones.crearOrdenesRemisiones(ordenesRemisiones);
        return ResponseEntity.ok(crear);
    }
    
    @PutMapping(value = "")
    public ResponseEntity<OrdenesRemisiones> ActualizarOrdenesRemisiones(@RequestBody OrdenesRemisiones ordenesRemisiones){
        OrdenesRemisiones actualizar = serviceOrdenesRemisiones.ActualizarOrdenesRemisiones(ordenesRemisiones);
        return ResponseEntity.ok(actualizar);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<String> EliminarInventario(@PathVariable("id") Long id){
        if(id != null){
            if( serviceOrdenesRemisiones.EliminarOrdenesRemisiones(id)){
                 return ResponseEntity.ok().body("Eliminado");
            }
        }
      
        return ResponseEntity.notFound().build();
    }
    
}
