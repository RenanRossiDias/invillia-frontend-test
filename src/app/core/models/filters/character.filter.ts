import PaginationFilter from './pagination.filter';
import { HttpParams } from '@angular/common/http';

export default class CharacterFilter extends PaginationFilter {

    name!: string

    constructor() {
        super()
        this.name = null
    }
    getParams(): HttpParams {
        let params = super.getParams()

        if (this.name) params.append('name', this.name)

        return params
    }

}