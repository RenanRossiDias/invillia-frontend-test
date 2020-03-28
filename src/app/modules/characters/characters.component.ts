import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/core/services/messages.service';
import { CharactersService } from 'src/app/core/services/characters.service';
import CharacterFilter from 'src/app/core/models/filters/character.filter';
import { Character } from 'src/app/core/models/entities/character/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private messagesService: MessagesService, private charactersService: CharactersService) {
    this.loadingCharacters = false
    this.totalCharacters = 0
  }

  private currentHurryUpMessageIndex: number = 0
  private hurryUpMessages: Array<string> = []
  private characters: Array<Character> = []
  private totalCharacters: number
  private currentPage: number = 1
  private loadingCharacters: boolean
  
  get remainingCharacters(): number { return this.totalCharacters - this.characters.length}

  ngOnInit() {
    this.displayHurryUpMessages()
    this.retrieveCharacters(this.currentPage)
  }

  private async retrieveCharacters(currentPage: number) {
    let filter = new CharacterFilter()
    filter.page = currentPage
    this.loadingCharacters = true
    let characters = await this.charactersService.retrieveCharacters(filter)
    characters.results = characters.results.map(c => Object.assign(new Character, c))
    this.totalCharacters = characters.count
    this.characters = this.characters.concat(characters.results)
    this.loadingCharacters = false
  }

  private async loadNextPage() {
    this.currentPage++
    try {
      await this.retrieveCharacters(this.currentPage)
    } catch (error) {
      this.currentPage--
    }


  }

  private async loadHurryUpMessages() {
    this.hurryUpMessages = await this.messagesService.retrieveHurryUpMessages()
  }

  private async displayHurryUpMessages() {
    await this.loadHurryUpMessages()
    this.cycleHurryUpMessages(this.currentHurryUpMessageIndex, this.hurryUpMessages)
  }

  private cycleHurryUpMessages(currentHurryUpMessageIndex: number, hurryUpMessages: Array<string>) {
    this.currentHurryUpMessageIndex = currentHurryUpMessageIndex
    const time = 15000

    if (currentHurryUpMessageIndex < hurryUpMessages.length - 1)
      setTimeout(() => this.cycleHurryUpMessages(++currentHurryUpMessageIndex, hurryUpMessages), time);
  }

}
