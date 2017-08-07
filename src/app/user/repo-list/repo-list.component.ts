import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Repo, InfoService } from "../../index";

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  login: string;
  repo_name: string;
  repoArr: Repo[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private getInfo: InfoService) {
  }

  

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.activatedRoute.parent.params.forEach((params: Params) => {
        this.login = params["login"];
        this.repo_name = params["repo_name"];   
    });
    this.getInfo.getRepoList(this.login, this.repo_name).subscribe(response => {
      this.repoArr = response;
      this.repoArr.sort(this.compareAge);
    }, error => {
      console.log(error);
    })
  }

  compareAge(objA, objB) {
    if (objA.type === 'dir' || objB.type === 'dir' || objA.type === 'tree' || objB.type === 'tree') {
      return 1;
    } else {
      return 0;
    }
  }

  selectDir(url: string){
    this.getInfo.getRepoFiles(url).subscribe(response => {
      this.repoArr = response['tree'];
      this.repoArr.sort(this.compareAge);
    }, error => {
      console.log(error);
    })
  }

}
