import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'navbar',component:NavBarComponent},
    { path: 'home', component: HomeComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'add-category', component: CategoryComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
