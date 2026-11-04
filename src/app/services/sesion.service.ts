import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { SKIP_TOKEN } from '../utils/token-context';
import { PerfilModel } from '../models/perfil';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SesionService {
    apiSesion = environment.apiCubos

    constructor(
        private _http: HttpClient,
    ) {}

    async iniciarSesionAsync(email: string, password: string): Promise<string> {
        const url = `${this.apiSesion}api/Manage/Login`

        let header = new HttpHeaders().set('content-type', 'application/json');
        const body = {
            "email": email,
            "password": password
        }

        const response = await firstValueFrom(this._http.post<{ response: string }>(url, body, {
            headers: header,
            context: new HttpContext().set(SKIP_TOKEN, true),
        }));

        return response.response
    }

    async crearCuentaAsync(perfil: PerfilModel): Promise<any> {
        const url = `${this.apiSesion}api/Manage/RegistroUsuario`

        let header = new HttpHeaders().set('content-type', 'application/json')
        return this._http.post(url, perfil, {
            headers: header,
            context: new HttpContext().set(SKIP_TOKEN, true),
        });
    }

    async getPerfilAsync(): Promise<PerfilModel> {
        const url = `${this.apiSesion}api/Manage/PerfilUsuario`

        return firstValueFrom(this._http.get<PerfilModel>(url))
    }
}