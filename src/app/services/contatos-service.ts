import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  private _contatos: Contato[] = [];

  constructor() {}

  public get contatos(): Contato[] {
    return this._contatos;
  }
  public inserir(contato: Contato): void {
    this._contatos.push(contato);
  }
}
