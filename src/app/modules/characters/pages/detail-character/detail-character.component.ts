import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/entities/character/character.model';
import Starship from 'src/app/core/models/entities/starship/starship.model';
import { StarshipsService } from 'src/app/core/services/starships.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, private starshipsService: StarshipsService) {
    this.character = new Character()
    this.starships = []
    this.characterId = +this.route.snapshot.params.id
    this.loadingCharacter = false
    this.loadingStarships = false
  }

  private characterId: number
  private character: Character
  private starships: Array<Starship>
  private loadingStarships: boolean
  private loadingCharacter: boolean

  async ngOnInit() {
    await this.retrieveCharacter(this.characterId)
    if (this.character.starships.length) await this.retrieveStarships()
  }

  async retrieveCharacter(characterId: number) {
    this.loadingCharacter = true
    this.character = await this.charactersService.retrieveCharacter(characterId)
    this.character = Object.assign(new Character, this.character)
    this.loadingCharacter = false
  }

  async retrieveStarships() {
    this.loadingStarships = true
    this.starships = await Promise.all(
      this.character.starships.map(starshipUri =>
        this.starshipsService.retrieveStarship(starshipUri)))
    this.loadingStarships = false
  }

}
