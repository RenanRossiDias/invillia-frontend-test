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

    constructor() {
        this.films = []
        this.homeworld = []
        this.species = []
        this.starships = []
        this.vehicles = []
    }


    get id() {
        const splitted = this.url.split('/')
        const id = splitted[splitted.length - 2]
        return id
    }

    get picture() {
        return `https://starwars-visualguide.com/assets/img/characters/${this.id}.jpg`
    }

    get genderSymbol(): string {
        switch (this.gender) {
            case Gender.Female:
                return 'fa-venus'
            case Gender.Male:
                return 'fa-mars'
            default:
                return 'fa-genderless'
        }
    }

}
