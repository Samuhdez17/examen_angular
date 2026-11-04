import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CuboModel } from '../../models/cubo';
import { CubosService } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-component',
  standalone: false,
  styleUrl: './pedido-component.css',
  templateUrl: './pedido-component.html',
})

export class PedidoComponent implements OnInit {
  productos: Array<CuboModel> = []
  productoSeleccionado: CuboModel | null = null

  constructor(
    private _cuboService: CubosService,
    private _router: Router,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    this.productos = await this._cuboService.getCubosAsync();
    this._cdr.detectChanges();
  }

  async hacerPedido() {
    if (this.productoSeleccionado) {
      await this._cuboService.comrparCuboAsync(this.productoSeleccionado.idCubo)
      this._router.navigate(['/']);
    }
  }
}