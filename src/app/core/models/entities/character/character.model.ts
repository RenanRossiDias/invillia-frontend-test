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
    created: Date
    edited: Date
    species: Array<string>
    starships: Array<string>
    vehicles: Array<string>

}
