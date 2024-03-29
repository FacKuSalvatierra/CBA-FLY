import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/auth/config/config.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CheckoutComponent } from './components/dashboard/checkout/checkout.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { InicioComponent } from './components/shared/inicio/inicio.component';
import { NosotrosComponent } from './components/shared/nosotros/nosotros.component';
import { RegisterComponent } from './components/auth/login/register.component';
import { AuthGuard } from '../app/auth/auth.guard';
import { MercadoPagoComponent } from './components/dashboard/checkout/mercadopago.component';
import { ApplandingComponent } from './components/shared/applanding/applanding.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'mercadopago', component:MercadoPagoComponent},
  {path: 'config', component:ConfigComponent},
  {path: 'login/:id', component:RegisterComponent},
  {path: 'app', component:ApplandingComponent},
  {path: '', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
