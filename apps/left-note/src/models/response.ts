export interface Response<D = undefined, M = undefined> {
    status: number;
    message: string;
    data: D;
    meta: M;
}