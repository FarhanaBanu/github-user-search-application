import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(private authService: AuthService, private router: Router,
              private toastService: ToastrService) {
                authService.getUser().subscribe(user => {
                  this.email = user?.email;
                });
              }

  ngOnInit(): void {
  }

  async handleSignOut() {
    try{
      const res = await this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toastService.info('Login again to continue');
      this.email = null;
    } catch (error) {
      this.toastService.error('Something went wrong!');
    }
  }

}
