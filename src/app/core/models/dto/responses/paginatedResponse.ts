export default class PaginatedResponse<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>;
}