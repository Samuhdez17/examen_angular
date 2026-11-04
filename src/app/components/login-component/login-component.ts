import { ChangeDetectorRef, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';
import { SignalUser } from '../../services/signal.user.service';
import { ToastService } from 'ngx-yet-another-toast-library';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private _signalUser = inject(SignalUser)
  @ViewChild('correo') correo!: ElementRef;
  @ViewChild('contrasenia') contrasenia!: ElementRef;

  constructor(
    private _sesionService: SesionService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
    private _toastService: ToastService,
  ) {}

  async login() {
    let email = this.correo.nativeElement.value
    let password = this.contrasenia.nativeElement.value

    try {
      let token = await this._sesionService.iniciarSesionAsync(email, password)

      if (!token) {
        this._toastService.error('Credenciales inválidas');
        return;
      }

      sessionStorage.setItem('token', token)

      let perfil = await this._sesionService.getPerfilAsync()
      this._signalUser.logIn(perfil)

      this._toastService.success('Login exitoso');
      this._router.navigate(['/perfil']);
      this._cdr.detectChanges()
    } catch (error) {
      console.error('Login error:', error);
      this._toastService.error('Error al iniciar sesión. Verifica tus credenciales.');
    }
  }
}
