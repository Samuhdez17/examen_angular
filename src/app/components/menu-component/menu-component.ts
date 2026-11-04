import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { SignalUser } from '../../services/signal.user.service';
import { CubosService } from '../../services/cubos.service';
import { NavigationEnd, Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _signalUser = inject(SignalUser);

  perfil = this._signalUser.user;
  @ViewChild('selectMarca') marcaSeleccionada!: ElementRef
  marcas: Array<string> = []

  constructor(
    private _cubosService: CubosService,
    private _sesionService: SesionService,
    private _router: Router,
  ) {}

  async ngOnInit() {
    await this.verificarSesion();
    this.marcas = await this._cubosService.getMarcasAsync();
  }

  private async verificarSesion() {
    const token = sessionStorage.getItem('token')

    if (token) {
      try {
        const perfil = await this._sesionService.getPerfilAsync();
        this._signalUser.logIn(perfil);
        
      } catch {
        this._signalUser.logOut();
      }
    }
  }

  logout() {
    this._signalUser.logOut()
    this._router.navigate(['/'])
  }
}
