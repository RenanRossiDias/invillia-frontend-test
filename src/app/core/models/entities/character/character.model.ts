import { Gender } from './gender.enum'

export class Character {

    birth_year: string
    eye_color: string
    films: Array<string>
    gender: Gender
    hair_color: string
    height: number
    homeworld: Array<string>
    mass: number
    name: string
    skin_color: string
    species: Array<string>
    starships: Array<string>
    vehicles: Array<string>
    
    created: Date
    edited: Date
    url: string

    
    getId(){
    const splitted = this.url.split('/')
    const id = splitted[splitted.length - 2]
    return id
    }

}
