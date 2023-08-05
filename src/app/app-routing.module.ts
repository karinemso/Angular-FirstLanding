import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogContentComponent } from './blog-content/blog-content.component';
import { ConceitosComponent } from './conceitos/conceitos.component';
import { OndeaprenderComponent } from './ondeaprender/ondeaprender.component';

const routes: Routes = [{
  path:'conceitos',
  component: ConceitosComponent

},
{
  path:'',
  component: BlogContentComponent

},
{
  path:'ondeaprender',
  component: OndeaprenderComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
