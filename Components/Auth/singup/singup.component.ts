import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrl: "./singup.component.scss",
})
export class SingupComponent implements OnInit {
  form!: FormGroup;
  showPassword: boolean = false;

  constructor() {}

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      const name = this.form.value.name;

      this.form.reset();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      checkbox: new FormControl(null),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
