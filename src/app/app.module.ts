import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstHeaderComponent } from './first-header/first-header.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { FormsModule } from '@angular/forms';
import { ConceitosComponent } from './conceitos/conceitos.component';
import { OndeaprenderComponent } from './ondeaprender/ondeaprender.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstHeaderComponent,
    BlogContentComponent,
    ConceitosComponent,
    OndeaprenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
