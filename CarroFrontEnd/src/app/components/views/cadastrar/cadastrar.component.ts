import { MatTableDataSource } from "@angular/material/table";
import { CarroService } from "./../../../services/carro.service";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Carro } from "src/app/models/Carro";


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  colunasCarro = ["modelo", "placa", "ano"]; 

  data!: string;

  modelo!: string;
  placa!: string;
  ano!: string;
    
  constructor(private service: CarroService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.modelo = "";
    // Caso de edição de registro
    // Verificar se existe um id na url
    // Buscar o registro no backend
    // Atribuir para a variável global os valores do objeto que retornou do backend
  }
  cadastrar(): void {
    let carro = new Carro();
    carro.modelo = this.modelo;
    carro.placa = this.placa;
    carro.ano = Number.parseInt(this.ano);
    // this.carros.data.push(carro);
    this.service.cadastrar(carro).subscribe(carro => {
      console.log(carro);
      // this.modelo= "";
      // this.placa = "";
      // this.ano = "";
      this.snack.open("Carro cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
  }



}

// Criar o clique do botão
// Testar o preenchimento dos campos do formulário
// Criar uma classe para armazenar os dados do crédito
// Criar um objeto com os dados do formulário
// Armazenar os objetos dentro de um array
// Colocar as informações do débito dentro do ciclo que será gravado
//no backend
// Mostrar as informações dentro da tabela

