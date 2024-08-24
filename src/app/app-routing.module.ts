import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  // add any other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
