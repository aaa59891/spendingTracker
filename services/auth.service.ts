import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';
import { auth } from "firebase/app";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(
        private afAuth: AngularFireAuth
    ) {}

    loginWithGoogle(){
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout(){
        this.afAuth.auth.signOut();
    }

    isLoginObs(){
        return this.afAuth.user.pipe(
            map((user) => user !== null)
        );
    }
}
