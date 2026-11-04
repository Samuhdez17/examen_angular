import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SignalUser } from '../../services/signal.user.service';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _signalUser = inject(SignalUser);

  perfil = this._signalUser.user;
  marcas!: Array<string>;

  constructor(
    private _cubosService: CubosService,
    private _cdr: ChangeDetectorRef,
    private _router: Router,
  ) {}

  async ngOnInit() {
    this.marcas = await this._cubosService.getMarcasAsync();
    this._cdr.detectChanges();
  }

  irAMarca(marca: string) {
    this._router.navigate(['/marca', marca]);
    this._cdr.detectChanges();
  }

  logout() {
    this._signalUser.logOut()
    this._router.navigate(['/'])
  }
}
