import { User } from './User';

export interface Advertentie {

    naam: string;
    omschrijving: string;
    prijs: string;
    verkocht: boolean;
    userEmail: string;
    userNaam: string;
    user: User;
    id?: number;
}