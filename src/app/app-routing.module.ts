import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { TrainningComponent } from './pages/trainning/trainning.component';
import { AboutComponent } from './pages/about/about.component';
import { CommunityComponent } from './pages/community/community.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'trainning', component: TrainningComponent },
  { path: 'about', component: AboutComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
