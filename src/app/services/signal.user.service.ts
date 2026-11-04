import { Injectable, signal } from '@angular/core';
import { PerfilModel } from '../models/perfil';

@Injectable({
    providedIn: 'root'
})
export class SignalUser {
    user = signal<PerfilModel | null>(null)

    constructor(
    ) {}

    logIn(user: PerfilModel) {
        this.user.set(user)
    }

    logOut() {
        this.user.set(null)
        sessionStorage.removeItem('token')
    }
}
