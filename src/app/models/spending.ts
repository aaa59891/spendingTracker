import { IFirebaseModel } from "../shared/firebase/interfaces/IFirebaseModel";

export class Spending implements IFirebaseModel {
    id: string;
    amount: number;
    category: object;
    date: string;
    comment: string;
}