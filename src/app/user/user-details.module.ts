import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../index';
import { PaginateService } from '../index';
import { RepoService } from '../shared/repo.service';
import { MaterialModule } from '../material.module';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoRoutingModule } from './user-details-routing.module';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoComitsComponent } from './repo-comits/repo-comits.component';
import { GoBackComponent } from '../go-back/go-back.component';



@NgModule({
  imports: [
    CommonModule,
    RepoRoutingModule,
    MaterialModule
  ],
  declarations: [UserDetailsComponent, RepoDetailsComponent, RepoListComponent, RepoComitsComponent, GoBackComponent],
  providers: [PaginateService, RepoService]
})
export class UserDetailsModule { }
