import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent {
   listaDiretivas = [
    {
      nome: 'ng-app',
      descricao: 'Início do aplicativo AngularJS.'
    },
    {
      nome: 'ng-init',
      descricao: 'Usado para inicializar uma variável.'
    },
    {
      nome: 'ng-model',
      descricao: 'ng-model é usado para ligar aos controles HTML.'
    },
    {
      nome: 'ng-controller',
      descricao: 'Anexa um controlador à vista.'
    },
    {
      nome: 'ng-bind',
      descricao: 'Vincula o valor com o elemento HTML.'
    },
    {
      nome: 'ng-repeat',
      descricao: 'Repete o modelo HTML uma vez para cada item da coleção especificada.'
    },
    {
      nome: 'ng-show',
      descricao: 'Mostra ou esconde o elemento HTML associado.'
    },
    {
      nome: 'ng-disabled',
      descricao: 'Use para desativar ou ativar um botão dinamicamente.'
    },
    {
      nome: 'ng-if',
      descricao: 'Remove ou recria o elemento HTML com base em uma expressão.'
    },
    {
      nome: 'ng-click',
      descricao: 'Etapa personalizada com clique.'
    }
  ];

  testeParagrafo = ''
}
