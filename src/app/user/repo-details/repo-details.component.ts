import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { InfoService, Repo } from "../../index";
import { RepoListComponent } from "../index";
import { slideInOutAnimation } from '../../animations/slide.animation';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss'],
  animations: [slideInOutAnimation],
  host: {'[@slideInOutAnimation]': ''}
})
export class RepoDetailsComponent implements OnInit {

  repoArr: Repo[];
  login: string;
  repo_name: string;
  url: string;
  name: string;
  activeLinkIndex: number = 0;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private getInfo: InfoService) {}

  ngOnInit() {
    this.loadRepo();
  }

  loadRepo(){
    this.activatedRoute.params.forEach((params: Params) => {
            this.login = params["login"];
            this.repo_name = params["repo_name"];   
        });
    this.getInfo.getRepoDetails(this.login, this.repo_name).subscribe(response => {
      this.repoArr = response;
    }, error => {
      console.log(error);
    })
  }

}
