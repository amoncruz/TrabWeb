import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaGestoresComponent } from './lista-gestores/lista-gestores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaGestoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
