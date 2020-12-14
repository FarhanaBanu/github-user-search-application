import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.authService.signIn(email, password)
    .then((res) => {
      this.router.navigateByUrl('/');
      this.toastrService.success('Signin success');

    })
    .catch((err) => {
      console.log(err.message);
      this.toastrService.error('Signin failed');
    });
  }

}
