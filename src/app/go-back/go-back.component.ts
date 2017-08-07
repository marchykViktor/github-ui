import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

  params: object;

  constructor(private activatedRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
        this.params = params;
    });
  }

  goBack(){
    if ("repo_name" in this.params) {
      this.route.navigate( ["user", this.params["login"]] );
    } else {
      this.route.navigate( ["all"] )
    }  
  }

}
