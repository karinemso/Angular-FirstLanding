import { Component } from '@angular/core';

@Component({
  selector: 'app-conceitos',
  templateUrl: './conceitos.component.html',
  styleUrls: ['./conceitos.component.scss']
})
export class ConceitosComponent {
   conceitosAngular = [
    {
      titulo: 'Componentes',
      descricao: 'Componentes são blocos de construção fundamentais em Angular, encapsulando lógica e UI.'
    },
    {
      titulo: 'Diretivas',
      descricao: 'Diretivas estendem o HTML com comportamentos personalizados, como ngIf, ngFor e ngModel.'
    },
    {
      titulo: 'Módulos',
      descricao: 'Módulos agrupam funcionalidades relacionadas, promovendo organização e modularidade.'
    },
    {
      titulo: 'Injeção de Dependência',
      descricao: 'Injeção de dependência gerencia as dependências entre partes da aplicação, facilitando a reutilização.'
    },
    {
      titulo: 'Serviços',
      descricao: 'Serviços encapsulam lógica de negócios e são injetáveis em componentes e outros serviços.'
    },
    {
      titulo: 'Templates',
      descricao: 'Templates definem a estrutura do DOM e a aparência dos componentes usando uma linguagem de template.'
    },
    {
      titulo: 'Binding',
      descricao: 'Binding permite sincronizar dados entre o componente e o DOM, incluindo interpolação, property binding e event binding.'
    },
    {
      titulo: 'Roteamento',
      descricao: 'Roteamento possibilita a navegação entre partes da aplicação sem recarregar a página inteira.'
    },
    {
      titulo: 'Observables',
      descricao: 'Observables são usados para lidar com fluxos de dados assíncronos e eventos, sendo fundamentais na programação reativa.'
    },
    {
      titulo: 'Pipes',
      descricao: 'Pipes transformam dados exibidos em templates, como formatação de datas ou ordenação de listas.'
    },
    {
      titulo: 'Formulários',
      descricao: 'Angular oferece suporte a formulários reativos e baseados em template, incluindo validação e rastreamento de estado.'
    },
    {
      titulo: 'Lazy Loading',
      descricao: 'Lazy loading permite carregar módulos somente quando são necessários, melhorando o desempenho.'
    },
    {
      titulo: 'Zonas',
      descricao: 'Zonas são essenciais para a detecção de mudanças e atualizações no DOM, garantindo o funcionamento do binding e das diretivas.'
    },
    {
      titulo: 'PWA (Progressive Web Apps)',
      descricao: 'Angular suporta a criação de Progressive Web Apps, oferecendo uma experiência offline e nativa.'
    }
  ];
  
 
  
}
