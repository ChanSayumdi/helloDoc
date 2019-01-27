import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class RegisterComponent3 implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });
  constructor(private _router: Router, private _userService: UserService) { }
  ngOnInit() {
  }
  moveToLogin() {
    this._router.navigate(['/login']);
  }
  register() {
    if (!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) {
      console.log('Invalid Form');
      return;
    }
    this._userService.register(JSON.stringify(this.registerForm.value))
      .subscribe(data => { console.log(data); this._router.navigate(['/login']); }, error => console.error(error));
    //console.log(JSON.stringify(this.registerForm.value));
  }
}
