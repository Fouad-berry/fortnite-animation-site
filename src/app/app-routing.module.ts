import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmeticsListComponent } from './cosmetics-list/cosmetics-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: 'cosmetics', component: CosmeticsListComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
