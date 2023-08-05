import { Component } from '@angular/core';

@Component({
  selector: 'app-ondeaprender',
  templateUrl: './ondeaprender.component.html',
  styleUrls: ['./ondeaprender.component.scss']
})
export class OndeaprenderComponent {
  recursosAprenderAngular = [
    {
      link: 'https://angular.io/docs',
      titulo: 'Documentação Oficial do Angular',
      descricao: 'Guia oficial do Angular com tutoriais detalhados e documentação abrangente.'
    },
    {
      link: 'https://www.pluralsight.com/paths/angular',
      titulo: 'Pluralsight - Trilhas de Aprendizado Angular',
      descricao: 'Trilhas de aprendizado na Pluralsight para aprofundar seus conhecimentos em Angular.'
    },
    {
      link: 'https://angular-university.io/',
      titulo: 'Angular University',
      descricao: 'Cursos e tutoriais práticos para dominar o desenvolvimento com Angular.'
    },
    {
      link: 'https://www.youtube.com/c/Academind',
      titulo: 'Academind YouTube Channel',
      descricao: 'Canal do YouTube com vídeos sobre Angular e outras tecnologias web.'
    },
    {
      link: 'https://www.tutorialspoint.com/angular/index.htm',
      titulo: 'TutorialsPoint - Angular Tutorial',
      descricao: 'Tutorial online sobre Angular abrangendo desde conceitos básicos até avançados.'
    },
    {
      link: 'https://www.w3schools.com/angular/',
      titulo: 'W3Schools - Angular Tutorial',
      descricao: 'Tutorial introdutório sobre Angular no W3Schools.'
    },
    {
      link: 'https://rangle.io/resources/',
      titulo: 'Rangle.io - Angular Resources',
      descricao: 'Recursos e artigos sobre Angular da Rangle.io, abordando diversos tópicos.'
    },
    {
      link: 'https://ultimatecourses.com/courses/angular',
      titulo: 'Ultimate Courses - Angular',
      descricao: 'Cursos premium de Angular com foco em práticas recomendadas e desenvolvimento avançado.'
    },
    {
      link: 'https://github.com/johnpapa/angular-styleguide',
      titulo: 'Angular Style Guide by John Papa',
      descricao: 'Guia de estilo oficial de código para desenvolvimento consistente em Angular.'
    },
    {
      link: 'https://www.coursera.org/specializations/full-stack-angular',
      titulo: 'Coursera - Full Stack Angular and Java',
      descricao: 'Especialização em Full Stack Angular e Java na Coursera, abrangendo frontend e backend.'
    }
  ];
}
