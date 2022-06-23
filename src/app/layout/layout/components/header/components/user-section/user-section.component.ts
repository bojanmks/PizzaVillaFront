import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.scss']
})
export class UserSectionComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: 'auto'
    });
  }
}
