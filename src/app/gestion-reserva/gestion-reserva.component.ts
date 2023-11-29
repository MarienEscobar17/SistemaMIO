import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-gestion-reserva',
  templateUrl: './gestion-reserva.component.html',
  styleUrls: ['./gestion-reserva.component.css']
})
export class GestionReservaComponent implements OnInit {

 
  articulos=null;
  
  registro:any;
  codigo:number;
  nombre:string;
  cedula:string;
  edad:number;
  hora_ingreso:string;
  cantidad_integrantes:number;
  precio_pagado:number;

  reg={
  codigo:null,
  nombre:null,
  cedula:null,
  edad:null,
  hora_ingreso:null,
  cantidad_integrantes:null,
  precio_pagado:null
  }


  constructor(private _route:ActivatedRoute,private firebase:FirestoreService) {}

  ngOnInit() {
    let precio=+this._route.snapshot.paramMap.get('precio');
    this.reg.precio_pagado=precio;
    let cantidad=+this._route.snapshot.paramMap.get('cantidad');
    this.reg.cantidad_integrantes=cantidad;
    let edad=+this._route.snapshot.paramMap.get('edad');
    this.reg.edad=edad;
    this.reg.hora_ingreso=(new Date().getHours()).toString() + ":" +(new Date().getMinutes()).toString();
    
    this.firebase.read_Students().subscribe(data=>{
      this.registro=data.map(e=>{
        return{
          codigo: e.payload.doc.id,
          isEdit:false,
          nombre: e.payload.doc.data()['nombre'],
          cedula: e.payload.doc.data()['cedula'],
          edad: e.payload.doc.data()['edad'],
          hora_ingreso: e.payload.doc.data()['hora_ingreso'],
          cantidad_integrantes: e.payload.doc.data()['cantidad_integrantes'],
          precio_pagado: e.payload.doc.data()['precio_pagado']
        };
      })
      console.log(this.registro);
    })
    
  }

  CreateRecord(){
    let record={};

    record['nombre'] =this.reg.nombre;
    record['cedula']= this.reg.cedula;
    record['edad']= this.reg.edad;
    record['hora_ingreso'] =(new Date().getHours()).toString() + ":" +(new Date().getMinutes()).toString();
    record['cantidad_integrantes']= this.reg.cantidad_integrantes;
    record['precio_pagado']= this.reg.precio_pagado;
    this.firebase.create_NewStudent(record).then(resp=>{
      this.reg.nombre="";
      this.reg.cedula= "";
      this.reg.edad=undefined;
      this.reg.hora_ingreso="";
      this.reg.cantidad_integrantes=undefined;
      this.reg.precio_pagado=undefined;
      console.log(resp);
    })
    .catch(error=>{
      console.log(error);
    });
  }

  RemoveRecord(rowID){
  this.firebase.delete_Student(rowID);
  }

  EditRecord(record){
    record.isEdit= true;
    record.EditName= record.Name;
    record.EditAge=record.Age;
    record.EditAddress= record.Address;
  }

  UpdateRecord(recordRow){
console.log(recordRow);
    let record={};
    record['nombre']=recordRow.nombre;
    record['cedula']=recordRow.cedula;
    record['edad']=recordRow.edad;
    record['hora_ingreso']=recordRow.hora_ingreso;
    record['cantidad_integrantes']=recordRow.cantidad_integrantes;
    record['precio_pagado']=recordRow.precio_pagado;
    this.firebase.update_Student(recordRow.codigo, record);
    recordRow.isEdit=false;
  }

  hayRegistros() {
    return true;
  } 

  seleccionar(codigo) {
    this.firebase.read_Student(codigo).subscribe((e) => {
      this.reg.codigo= e.payload.id,
      this.reg.nombre= e.payload.data()['nombre'],
      this.reg.cedula= e.payload.data()['cedula'],
      this.reg.edad= e.payload.data()['edad'],
      this.reg.hora_ingreso= e.payload.data()['hora_ingreso'],
      this.reg.cantidad_integrantes= e.payload.data()['cantidad_integrantes'],
      this.reg.precio_pagado= e.payload.data()['precio_pagado']
    });
  }

}
