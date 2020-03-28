import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { DetailCharacterComponent } from './modules/characters/pages/detail-character/detail-character.component';
import { NotFoundComponent } from './modules/not-found/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: DetailCharacterComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
