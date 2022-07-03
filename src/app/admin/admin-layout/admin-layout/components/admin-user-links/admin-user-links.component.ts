import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-user-links',
  templateUrl: './admin-user-links.component.html',
  styleUrls: ['./admin-user-links.component.scss']
})
export class AdminUserLinksComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
