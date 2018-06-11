import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase/app";
import { AuthService } from "services/auth.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    isLogin;
    constructor(
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.isLogin = this.authService.isLoginObs();
    }

    onLogin(){
        this.authService.loginWithGoogle();
    }

    onLogout(){
        this.authService.logout();
    }
}
