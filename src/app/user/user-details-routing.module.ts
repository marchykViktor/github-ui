import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepoDetailsComponent, RepoListComponent, RepoComitsComponent } from './index';

const routes: Routes = [
    {
        path: ':login',
        component: UserDetailsComponent,
    },
    {
        path: ':login/repo/:repo_name',
        component: RepoDetailsComponent,
        children: [
            {
                path: '',
                redirectTo: 'details',
                pathMatch: 'full'
            },
            { path: 'details', component: RepoListComponent },
            { path: 'comits', component: RepoComitsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepoRoutingModule { }