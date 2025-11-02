export interface Response<D = undefined, M = undefined> {
    status: number;
    message: string;
    success: boolean;
    data: D;
    meta: M;
}