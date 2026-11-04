import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PerfilModel } from '../../models/perfil';
import { SignalUser } from '../../services/signal.user.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CubosService } from '../../services/cubos.service';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})

export class PerfilComponent implements OnInit {
  perfil!: PerfilModel | null

  constructor(
    private _signalUser: SignalUser,
    private _cubosService: CubosService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.perfil = this._signalUser.user()

    this._cdr.detectChanges()
  }

  async generarRegistro() {
    let doc: jsPDF = new jsPDF();

    doc.setFontSize(16);
    doc.text('Registro de pedidos', 10, 20);
    doc.setFontSize(12);

    const headers = ['idCubo', 'idPedido', 'idUsuario', 'fechaPedido']

    let pedidos = await this._cubosService.getPedidosAsync();
    const data: any[] = []

    for (let pedido of pedidos) {
      data.push([pedido.idCubo, pedido.idPedido, pedido.idUsuario, pedido.fechaPedido])
    }

    autoTable(doc, {
      head: [headers],
      body: data,
      startY: 30,
    });

    doc.save('informe.pdf')
  }
}
