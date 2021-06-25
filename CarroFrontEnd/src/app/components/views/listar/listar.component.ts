import { CarroService } from "./../../../services/carro.service";
import { Carro } from "../../../models/Carro";
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  carros!: MatTableDataSource<Carro>;
  displayedColumns: string[] = ['id', 'modelo','placa', 'ano', 'criadoEm'];

  constructor(private service: CarroService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((carros) => {
      this.carros = new MatTableDataSource<Carro>(carros);
    });
  }
}
