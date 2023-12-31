import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAdmin().subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
