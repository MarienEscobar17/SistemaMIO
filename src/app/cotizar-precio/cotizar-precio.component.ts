import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cotizar-precio',
  templateUrl: './cotizar-precio.component.html',
  styleUrls: ['./cotizar-precio.component.css']
})
export class CotizarPrecioComponent implements OnInit {

  constructor(private router:Router) {}

  navegarhaciaTabla(){
    this.router.navigate(['/Tabla']);
  }

  title = 'clase1';
  @Input() precio: number;
  @Input() off: String;
  @Input() anos: number;
  @Input() cantidad: number;
  valor =new FormControl('');
  edad =new FormControl('');
  estudiante =new FormControl('');
  grupo =new FormControl('');
  familias =new FormControl('');

  ngOnInit(){ 

    var costo= 0.0;
    var desct= "";
    

    if(this.edad.value<4 && this.edad.value>0){
      costo=0;
      desct= "100% el niño no paga";
    }
    else if(this.edad.value>4 && this.edad.value<7){
      costo= this.valor.value - (this.valor.value*0.5);
      desct= "50%";
    } 
    else if(this.edad.value>65){
      costo= this.valor.value - (this.valor.value*0.6);
      desct= "60%";
    }
    else if(this.estudiante.value=="SI"){
        costo= this.valor.value - (this.valor.value*0.6);
        desct= "60%";
      
    }
    else if(this.grupo.value=="SI"){
      
      if(this.familias.value>=5){
        costo= this.valor.value - (this.valor.value*0.3);
        desct= "30%";
      }
      if(this.familias.value<=4 && this.familias.value>=1){
        costo= this.valor.value - (this.valor.value);
        desct= "0%";
      }
    }
    else {
      costo= this.valor.value;
      desct= "0%"; 
    }
    
    
    this.precio = costo;
    this.off = desct;
    this.cantidad=this.familias.value;
    this.anos=this.edad.value;

    console.log(this.anos)
    return(costo);
    return(desct);

  }

}
