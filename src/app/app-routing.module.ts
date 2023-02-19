import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MonumentsComponent } from './monuments/monuments.component';
import { TraditionsComponent } from './traditions/traditions.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'cities', component:CitiesComponent},
  { path: 'traditions', component:TraditionsComponent},
  { path: 'monuments', component:MonumentsComponent},
  { path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
