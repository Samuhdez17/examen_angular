import { Component, ElementRef, ViewChild } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';
import { PerfilModel } from '../../models/perfil';

@Component({
  selector: 'app-signin-component',
  standalone: false,
  styleUrl: './signin-component.css',
  templateUrl: './signin-component.html',
})
export class SigninComponent {
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('correo') correo!: ElementRef;
  @ViewChild('contrasenia') contrasenia!: ElementRef;

  constructor(
    private _sesionService: SesionService,
    private _router: Router,
  ) {}

  async crearCuenta() {
    let nombre = this.nombre.nativeElement.value;
    let correo = this.correo.nativeElement.value;
    let contrasenia = this.contrasenia.nativeElement.value;

    let perfil = new PerfilModel(0, nombre, correo, contrasenia)
    let res = await this._sesionService.crearCuentaAsync(perfil)
    console.log('crearCuenta: ' + res)
    this._router.navigate(['/login'])
  }
}
