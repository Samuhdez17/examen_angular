import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';
import { SigninComponent } from './components/signin-component/signin-component';
import { ErrorComponent } from './components/error-component/error-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { AuthGuardGuard } from './guards/auth-guard-guard';
import { PedidoComponent } from './components/pedido-component/pedido-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuardGuard] },
  { path: 'pedido', component: PedidoComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'marca/:marca', component: MarcaComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
