import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MainComponentComponent} from './main-component/main-component.component'
import { LoginComponentComponent } from './login-component/login-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponentComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponentComponent }
];

// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
