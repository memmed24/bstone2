import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin-index/admin.component";
import { AdminProjectsIndexComponent } from "./admin/admin-index/admin-projects-index/admin-projects-index.component";
import { IndexComponent } from "./admin/admin-index/index/index.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'projects',
        component: AdminProjectsIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}