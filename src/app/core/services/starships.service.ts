import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import Starship from '../models/entities/starship/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  private url = this.apiService.endpoints.swapi

  private _starships: Array<Starship>

  get starships() {return this._starships}


  /**
   * Retrieves a single starship
   * @param starshipUri The starship's URI
   */
  retrieveStarship(starshipUri: string): Promise<Starship>{
    return this.http.get<Starship>(starshipUri).toPromise()    
  }

}
