import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { LoginComponent } from './components/login-component/login-component';
import { SigninComponent } from './components/signin-component/signin-component';
import { CubosService } from './services/cubos.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';
import { CuboComponent } from './components/cubo-component/cubo-component';
import { ErrorComponent } from './components/error-component/error-component';
import { MarcaComponent } from './components/marca-component/marca-component';
import { SesionService } from './services/sesion.service';
import { PedidoComponent } from './components/pedido-component/pedido-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    PerfilComponent,
    LoginComponent,
    SigninComponent,
    CuboComponent,
    ErrorComponent,
    MarcaComponent,
    PedidoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    CubosService,
    SesionService,
  ],
  bootstrap: [App],
})
export class AppModule {}
