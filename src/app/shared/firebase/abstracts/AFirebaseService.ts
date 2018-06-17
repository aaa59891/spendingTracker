import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { IFirebaseModel } from "../interfaces/IFirebaseModel";
import { Errors } from "../errors";
export abstract class AFirebaseService<T extends IFirebaseModel>{
    protected abstract readonly collectionName: string;
    constructor(
        protected db: AngularFirestore
    ){}
    
    addModel(model: T){
        model.id = this.db.createId();
        return this.collection.doc(model.id).set(model);
    }

    updateModel(model: T){
        return this.getErrorMsg(model.id)
            .then(() => this.getFirebaseDoc(model.id).update(model));
    }
    
    deleteModel(id: string){
        return this.getErrorMsg(id)
            .then(() => this.getFirebaseDoc(id).delete());
    }

    protected getFirebaseDoc<T>(id: string){
        return this.db.doc<T>(`${this.collectionName}/${id}`);
    }

    protected get collection(){
        return this.db.collection<T>(this.collectionName);
    }

    private getErrorMsg(id: string){
        if(!id || !id.trim()){
            return Promise.reject(Errors.EmptyId)
        }
        return Promise.resolve();
    }
}