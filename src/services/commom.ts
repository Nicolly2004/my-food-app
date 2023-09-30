

export interface PaginatedResponse<T> {
    current_page: number;
    total: number;
    per_page:number;
    last_page:number;
    data: T[];
}