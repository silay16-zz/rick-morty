export interface CharData {
    characters: Characters,
}
export interface SendData {
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
