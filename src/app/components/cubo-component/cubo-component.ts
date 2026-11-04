import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CuboModel } from '../../models/cubo';

@Component({
  selector: 'app-cubo-component',
  standalone: false,
  styleUrl: './cubo-component.css',
  templateUrl: './cubo-component.html',
})

export class CuboComponent {
  @Input() cubo!: CuboModel
  @Input() isSelected!: boolean
  @Output() metodoPadre: EventEmitter<any> = new EventEmitter()

  seleccionarFav() {
    this.metodoPadre.emit(this.cubo)
  }
}
