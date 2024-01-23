import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  constructor(private authSerice: AuthService) {}
  ngOnInit() {
    this.authSerice.user.subscribe((resData) => {
      this.isLogged = resData ? false : true;
    });
  }
  logout() {
    this.authSerice.logout();
  }
}
