import { IFirebaseModel } from "../shared/firebase/interfaces/IFirebaseModel";

export class Category implements IFirebaseModel{
    id: string;
    email: string;
    name: string;
}