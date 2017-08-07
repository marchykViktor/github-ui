import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "all",
            pathMatch: "full"
        },
      { path: "all", component: UserListComponent },
      { path: 'user', loadChildren: './user/user-details.module#UserDetailsModule' },
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule { }