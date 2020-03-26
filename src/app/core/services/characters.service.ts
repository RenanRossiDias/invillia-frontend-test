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


  get characters() { return this._characters }

  /**
   * Retrieve a list of characters based on filters parameters
   * @param filter
   */
  retrieveCharacters(filter: CharacterFilter): Promise<PaginatedResponse<Character>> {
    let params = filter.getParams()
    return this.http.get<PaginatedResponse<Character>>(this.url + 'people', { params }).toPromise()
  }

}
