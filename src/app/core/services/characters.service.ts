import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character } from '../models/entities/character/character.model';
import PaginatedResponse from '../models/dto/responses/paginatedResponse';
import CharacterFilter from '../models/filters/character.filter';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  private url = this.apiService.endpoints.swapi

  private _characters: Array<Character>
  private _character: Character


  get characters() { return this._characters }
  get character() { return this._character }

  /**
   * Retrieves a list of characters based on filters parameters
   * @param filter The character filter
   */
  async retrieveCharacters(filter: CharacterFilter): Promise<PaginatedResponse<Character>> {
    let params = filter.getParams()
    let response = await this.http.get<PaginatedResponse<Character>>(this.url + 'people', { params }).toPromise()
    this._characters = response.results
    return response
  }

  /**
   * Retrieves a single character
   * @param characterUri The character's URI 
   */
  async retrieveCharacter(characterUri: string): Promise<Character>
  /**
   * Retrieves a single character
   * @param characterId The character's unique identifier
   */
  async retrieveCharacter(characterId: number): Promise<Character>
  async retrieveCharacter(character: string | number): Promise<Character> {
    let response: Character

    if (typeof character === "string")
      response = await this.http.get<Character>(character).toPromise()
    else if (typeof character === "number")
      response = await this.http.get<Character>(this.url + `people/${character}/`).toPromise()


    this._character = response
    return response
  }

}
