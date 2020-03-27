import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './modules/characters/characters.component';
import { DetailCharacterComponent } from './modules/characters/pages/detail-character/detail-character.component';


const routes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent, 
  children: [
    {path: 'character', component: DetailCharacterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
