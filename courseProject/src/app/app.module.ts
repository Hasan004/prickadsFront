import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrerenComponent } from './components/registreren/registreren.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

let routes: Routes = [
  { path: 'labs', component: AppComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrerenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrerenComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
