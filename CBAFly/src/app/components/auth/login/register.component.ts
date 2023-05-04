import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:number=0;
constructor(private rutaActiva: ActivatedRoute){

}

ngOnInit(): void {
  this.rutaActiva.params.subscribe(

    (params:Params) => {
        this.id = params['id'];
      }

  );
  }
  }



