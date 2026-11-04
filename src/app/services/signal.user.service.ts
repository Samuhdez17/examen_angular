import { Injectable, OnInit, signal } from '@angular/core';
import { PerfilModel } from '../models/perfil';
import { SesionService } from './sesion.service';

@Injectable({
    providedIn: 'root'
})
export class SignalUser {
    user = signal<PerfilModel | null>(null)

    constructor(
    ) {}

    logIn(user: PerfilModel) {
        this.user.set(user)
        console.log('Signal user: '+ user)
    }

    logOut() {
        this.user.set(null)
        sessionStorage.removeItem('token')
    }
}