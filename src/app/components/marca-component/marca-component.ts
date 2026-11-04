import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CuboModel } from '../../models/cubo';
import { CubosService } from '../../services/cubos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marca-component',
  standalone: false,
  styleUrl: './marca-component.css',
  templateUrl: './marca-component.html',
})

export class MarcaComponent implements OnInit {
  marca!: string;
  cubos!: Array<CuboModel>

  constructor(
    private _cuboService: CubosService,
    private _activatedRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}
  
  async ngOnInit() {
    this._activatedRoute.params.subscribe((parms) => {
      this.marca = parms['marca'];
    })

    this.cubos = await this._cuboService.getCubosMarcaAsync(this.marca);
    this._cdr.detectChanges()
  }
}
