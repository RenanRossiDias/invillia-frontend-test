export default class Starship {

    name: string
    model: string
    manufacturer: string
    cost_in_credits: string
    length: number
    max_atmosphering_speed: number
    crew: number
    passengers: number
    cargo_capacity: number
    consumables: string
    hyperdrive_rating: number
    MGLT: number
    starship_class: string
    pilots: Array<string>
    films: Array<string>

    created: Date
    edited: Date
    url: string

    get id() {
        const splitted = this.url.split('/')
        const id = splitted[splitted.length - 2]
        return id
    }

    get picture() {
        return `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
    }
}