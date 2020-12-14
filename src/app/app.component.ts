import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';

  constructor(private authService: AuthService) {
    authService.getUser().subscribe((user) => {
      console.log(user);
    },
    (err) => {
      console.log(err);
    });

  }
}
