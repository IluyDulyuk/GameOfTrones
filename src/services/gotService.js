export default class GotService {
    constructor() {
        this._apiBaseUrl = 'https://anapioficeandfire.com/api/';
    }

    getResource = async (url) => {
        const resault = await fetch(`${this._apiBaseUrl}${url}`);

        return await resault.json();
    }

    getAllCharacter = () => {
        return this.getResource('/characters?page=5');
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`);
        return this._transformCharacterResponce(res)
    }
    getAllBooks = () => {
        return this.getResource('/books?page=5');
    }
    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`);
        return this._transformBookResponce(res)
    }
    getAllHouses = () => {
        return this.getResource('/houses?page=5');
    }
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`);
        return this._transformHouseResponce(res)
    }

    _transformCharacterResponce = (char) => {
        const resault = {
            name: char.name ? char.name : 'no value',
            gender: char.gender ? char.gender : 'no value',
            born: char.born ? char.born : 'no value ',
            died: char.died ? char.died : 'no value',
            culture: char.culture ? char.culture : 'no value'
        }

        return resault;
    }

    _transformBookResponce = (book) => {
        const resault = {
            name: book.name,
            numberOfPages: book.numberOfPages,
            pulister: book.pulister,
            released: book.released
        }

        return resault;
    }

    _transformHouseResponce = (house) => {
        const resault = {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }

        return resault;
    }
}