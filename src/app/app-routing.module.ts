import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BossesComponent } from './components/bosses/bosses.component';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { ClassesComponent } from './components/classes/classes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'creatures', component: CreaturesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'bosses', component: BossesComponent },
  { path: '**', redirectTo: 'home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
