import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbar } from '@angular/material';
import { AppComponent } from './app.component';
import { ListAuthorComponent } from './list-author/list-author.component';
import { RegisterAuthorComponent } from './register-author/register-author.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAuthorComponent,
    RegisterAuthorComponent
  ],
  imports: [
    BrowserModule,
    MatToolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
