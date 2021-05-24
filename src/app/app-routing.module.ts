import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './vista/dashboard/dashboard.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditarComponent } from './vista/editar/editar.component';

//ruta inicial 
const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'nuevo', component: NuevoComponent},
  {path:'editar', component: EditarComponent}
  
];

@NgModule({
  declarations: [],
   imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,NuevoComponent,EditarComponent]