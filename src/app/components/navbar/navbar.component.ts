import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import { AuthService } from "services/auth.service";
import { AutoUnsubscribe } from "../../shared/autoUnsubscribe";
import { Subscription } from "rxjs";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent extends AutoUnsubscribe implements OnInit {
    protected subscriptions: Subscription[] = [];
    isLogin;
    constructor(
        private authService: AuthService
    ) {
        super();
    }

    ngOnInit() {
        this.isLogin = this.authService.isLoginObs();
        this.subscriptions.push(this.isLogin);
    }

    onLogin(){
        this.authService.loginWithGoogle();
    }

    onLogout(){
        this.authService.logout();
    }
}
