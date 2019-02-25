import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';

const routes: Routes = [
  { path: '', component: GridLayoutComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
