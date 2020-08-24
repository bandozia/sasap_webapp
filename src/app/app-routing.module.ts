import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './shared/shared-services/guards.service'
import { RegisterProfessionalComponent } from './professionals/register-professional/register-professional.component';
import { LoginComponent } from './core/login/login.component';
import { ListProfessionalsComponent } from './professionals/list-professionals/list-professionals.component';
import { RegisterClientComponent } from './clients/register-client/register-client.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profissionais', component: ListProfessionalsComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'profissionais/cadastrar', component: RegisterProfessionalComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'clientes/cadastrar', component: RegisterClientComponent, canActivate: [IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
