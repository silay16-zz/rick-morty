export interface ICharData {
    characters: Characters,
}
export interface ISendData {
    page: number,
    name: string,
}
export type Characters = {
    results: Character[],
    info: {
        next: number,
    }
}
export type Character = {
    id: number,
    name: string,
    image: string,
    location: Location,
};
export type Location = {
    name: string,
}
