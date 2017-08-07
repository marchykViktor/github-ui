import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { InfoService, Repo } from "../../index";

@Component({
  selector: 'app-repo-comits',
  templateUrl: './repo-comits.component.html',
  styleUrls: ['./repo-comits.component.scss']
})
export class RepoComitsComponent implements OnInit {

  login: string;
  repo_name: string;
  commits: Repo[];
  page: number = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private getInfo: InfoService) { }

  ngOnInit() {
    this.loadComits();
  }

  loadComits(){
    this.activatedRoute.parent.params.forEach((params: Params) => {
            this.login = params["login"];
            this.repo_name = params["repo_name"];   
        });
    
    this.getInfo.getComits(this.login, this.repo_name).subscribe(response => {
      this.commits = response;
    }, error => {
      console.log(error); 
    })
  }

  loadMore(){
    let perPage = 30;
    this.page++;
      let pageParam = 'page=' + this.page + '&per_page=' + perPage;
      this.getInfo.getComitsNextPage(this.login, this.repo_name, pageParam).subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.commits.push(response[i]);
        }
      }, error => {
        console.log(error); 
      })
  }

}
