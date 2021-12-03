import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrerenComponent } from './components/registreren/registreren.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './services/authGuard';
import { HomeComponent } from './components/home/home.component';
import { PostAdComponent } from './components/post-ad/post-ad.component';
import { GetMyAdsComponent } from './components/get-my-ads/get-my-ads.component';
import { UpdateAdComponent } from './components/update-ad/update-ad.component';
import { ProfileComponent } from './components/profile/profile.component';

let routes: Routes = [
  { path:'', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrerenComponent},
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard]},
  { path: 'timeline', component: TimelineComponent, canActivate: [AuthGuard] },
  { path: 'add', component: PostAdComponent,  canActivate: [AuthGuard]},
  { path: 'userads', component: GetMyAdsComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: UpdateAdComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]; 

@NgModule({
  declarations: [
    AppComponent,
    RegistrerenComponent,
    LoginComponent,
    TimelineComponent,
    NavBarComponent,
    HomeComponent,
    PostAdComponent,
    GetMyAdsComponent,
    UpdateAdComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar: true,
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
