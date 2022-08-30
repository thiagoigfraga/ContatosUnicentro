import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contatos: string[];

  constructor() {
    this.contatos = ['Carlos Eduardo', 'Regiane Orlovski', 'Kelly Wiggers'];
  }
}
