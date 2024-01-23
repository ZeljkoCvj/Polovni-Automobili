import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  showPassword: boolean = false;
  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      this.form.reset();
      console.log(email + password);
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      checkbox: new FormControl(null),
    });
  }
}
