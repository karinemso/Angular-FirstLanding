import { Component } from '@angular/core';

@Component({
  selector: 'app-first-header',
  templateUrl: './first-header.component.html',
  styleUrls: ['./first-header.component.scss']
})
export class FirstHeaderComponent {
  alerta(){
    alert('Teste')
  }
  
  isMenuActive = false

  addClass(){
    console.log('click')
    this.isMenuActive = !this.isMenuActive
  }

  removeClass(){
    console.log('click')
    this.isMenuActive = false
  }
}
