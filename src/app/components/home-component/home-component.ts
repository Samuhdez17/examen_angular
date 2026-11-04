import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CuboModel } from '../../models/cubo';
import { CubosService } from '../../services/cubos.service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})

export class HomeComponent implements OnInit {
  cubos!: Array<CuboModel>
  cuboSeleccionado!: CuboModel

  constructor(
    private _cuboService: CubosService,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    this.cubos = await this._cuboService.getCubosAsync();
    this._cdr.detectChanges();
  }

  seleccionarFav(event: CuboModel) {
    this.cuboSeleccionado = event
  }
}
