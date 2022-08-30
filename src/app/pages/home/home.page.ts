import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/models/contato';
import { ContatosService } from 'src/app/services/contatos-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private contatos: Contato[];

  constructor(private router: Router, public contatosService: ContatosService) {
    this.contatos = this.contatosService.contatos;
  }

  private irParaCadastrarPage(): void {
    this.router.navigate(['/cadastrar']);
  }
}
