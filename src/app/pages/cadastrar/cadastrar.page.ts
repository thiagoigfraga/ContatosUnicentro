import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatosService } from 'src/app/services/contatos-service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  nome: string;
  telefone: number;
  genero: string;
  dataNascimento: string;
  data: string;

  constructor(
    public alertController: AlertController,
    public router: Router,
    private contatoService: ContatosService
  ) {}

  ngOnInit() {
    this.data = new Date().toISOString();
  }

  private cadastrar(): void {
    this.dataNascimento = this.dataNascimento.split('T')[0];
    if (
      this.validar(this.nome) &&
      this.validar(this.telefone) &&
      this.validar(this.genero) &&
      this.validar(this.dataNascimento)
    ) {
      let contato: Contato = new Contato(
        this.nome,
        this.telefone,
        this.genero,
        this.dataNascimento
      );
      this.contatoService.inserir(contato);
      this.presentAlert('Agenda', 'Cadastro', 'Efetuado com Sucesso!');
      this.router.navigate(['/home']);
    } else {
      this.presentAlert(
        'Agenda',
        'Erro ao Cadastrar',
        'Todos os Campos são obrigatórios'
      );
    }
  }

  private validar(campo: any): boolean {
    if (!campo) {
      return false;
    } else {
      return true;
    }
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
