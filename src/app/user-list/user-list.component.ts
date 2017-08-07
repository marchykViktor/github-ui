import { Component, OnInit, HostBinding  } from '@angular/core';
import { User, InfoService } from "../index";
import { Router } from "@angular/router";
import { slideInOutAnimation } from '../animations/slide.animation';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private getInfo: InfoService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers(){
    this.getInfo.getUsers().subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

  onSelect(selected: User) {
    this.router.navigate(["/user", selected]);
  }

}
