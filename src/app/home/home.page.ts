import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: any[];

  constructor(private router: Router) {
    this.contatos = [
      { nome: 'Carlos Eduardo', telefone: 42991094415 },
      { nome: 'Regiane Orlovski', telefone: 42991090123 },
      { nome: 'Antonio Zampier', telefone: 4299104343 },
    ];
  }

  private irParaCadastrarPage(): void {
    this.router.navigate(['/cadastrar']);
  }
}
