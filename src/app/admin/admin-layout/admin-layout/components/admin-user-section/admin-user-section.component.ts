import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-admin-user-section',
  templateUrl: './admin-user-section.component.html',
  styleUrls: ['./admin-user-section.component.scss']
})
export class AdminUserSectionComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
