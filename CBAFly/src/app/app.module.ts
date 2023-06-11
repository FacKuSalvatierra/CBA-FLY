import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ConfigComponent } from './components/auth/config/config.component';
import { CheckoutComponent } from './components/dashboard/checkout/checkout.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { NosotrosComponent } from './components/shared/nosotros/nosotros.component';
import { RegisterComponent } from './components/auth/login/register.component';

import { register } from 'swiper/element/bundle';
import { StickyHeaderDirective } from './sticky-header.directive';
import { NavToggleDirective } from './nav-toggle-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigComponent,
    CheckoutComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    RegisterComponent,
    StickyHeaderDirective,
    NavToggleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
export class AuthModule {}
register();