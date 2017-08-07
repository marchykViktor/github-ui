import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { InfoService, PaginateService, Repo, User } from "../../index";
import { slideInOutAnimation } from '../../animations/slide.animation';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'], 
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class UserDetailsComponent implements OnInit {

  login: string;
  user: User[];
  repos: Repo[];
  page: number = 1;
  repoLength: number;
  repoSize: number;
  showLoadBtn: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, 
              private getInfo: InfoService, 
              private paginateService: PaginateService,
              private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.activatedRoute.params.forEach((params: Params) => {
      this.login = params["login"];
    });

    this.getInfo.getUser(this.login).subscribe(response => {
      this.user = response;
      this.repoSize = this.user['public_repos'];
    }, error => {
      console.log(error);
    })

    this.getInfo.getRepo(this.login).subscribe(response => {
      this.repos = response;
      this.repoLength = this.repos.length;
    }, error => {
      console.log(error);
    })
  }

  loadMore() {
    let perPage = 30,
        showNext = this.paginateService.availabilityItems(this.page, perPage, this.repoSize );

    if (showNext === true) {
      this.page++;
      let pageParam = 'page=' + this.page + '&per_page=' + perPage;
      this.getInfo.getRepoNextPage(this.login, pageParam).subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.repos.push(response[i]);
        }
      }, error => {
        console.log(error); 
      })
    } else {
      this.showLoadBtn = false;
    }
  }

}
