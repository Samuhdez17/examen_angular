import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { CuboModel } from '../models/cubo';
import { firstValueFrom } from 'rxjs';
import { SKIP_TOKEN } from '../utils/token-context';

@Injectable()
export class CubosService {
    apiCubos = environment.apiCubos;

    constructor(private _http: HttpClient) {}

    async getCubosAsync(): Promise<CuboModel[]> {
        let url = `${this.apiCubos}/api/cubos`;

        return await firstValueFrom(
        this._http.get<CuboModel[]>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true),
        }),
        );
    }

    async getCuboAsync(idCubo: number): Promise<CuboModel> {
        let url = `${this.apiCubos}/api/cubos/${idCubo}`;

        return await firstValueFrom(
        this._http.get<CuboModel>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true),
        }),
        );
    }

    async getMarcasAsync(): Promise<string[]> {
        let url = `${this.apiCubos}/api/cubos/marcas`;

        return await firstValueFrom(
        this._http.get<string[]>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true),
        }),
        );
    }

    async getCubosMarcaAsync(marca: string): Promise<CuboModel[]> {
        let url = `${this.apiCubos}/api/cubos/cubosmarca/${marca}`;

        return await firstValueFrom(
        this._http.get<CuboModel[]>(url, {
            context: new HttpContext().set(SKIP_TOKEN, true),
        }),
        );
    }

    async comrparCuboAsync(idCubo: number): Promise<any> {
        let url = `${this.apiCubos}/api/Compra/InsertarPedido/${idCubo}`

        return firstValueFrom(this._http.post(url, {headers: { 'Content-Type': 'application/json' }}));
    }

    async getPedidosAsync(): Promise<any[]> {
        let url = `${this.apiCubos}api/Compra/ComprasUsuario`

        return firstValueFrom(this._http.get<any[]>(url, {headers: { 'Content-Type': 'application/json' }}));
    }
}