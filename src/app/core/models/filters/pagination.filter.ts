import { HttpParams } from '@angular/common/http';

export default class PaginationFilter{
    page!: number

    constructor(){
        this.page = 1
    }

    /**
     * Returns a new HttpParams object based on filled attributes within this object's instance
     */
    getParams(): HttpParams {
        let params = new HttpParams()

        params = params.append('page', this.page.toString())
        return params
    }
}