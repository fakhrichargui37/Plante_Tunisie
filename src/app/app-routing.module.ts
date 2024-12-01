import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AffCategoryComponent } from './aff-category/aff-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RequestResetEmailComponent } from './request-reset-email/request-reset-email.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import { ContactComponent } from './contact/contact.component';
import { CommandeComponent } from './commande/commande.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  { path: 'commande', component: CommandeComponent }, // Route pour la page commande
  { path: 'cart', component: CartComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'reset-password/verify', component: VerifyOtpComponent },
  { path: 'reset-password/request', component: RequestResetEmailComponent },
  {path:'edit-product/:id',component:EditProductComponent},
    {path: 'login', component: LoginComponent},
    {path:'navbar',component:NavBarComponent},
    { path: 'home', component: HomeComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'add-category', component: CategoryComponent },
    {path:'aff-category',component:AffCategoryComponent},
    {path:'edit-category/:id',component:EditCategoryComponent},
    {path:'product',component:ProductComponent},
    { path: 'contact', component: ContactComponent },
    {path:'utilisateur',component:UtilisateurComponent},
    { path: 'user-details/:id', component: UserDetailsComponent },
    { path: 'products-by-category/:id', component: ProductsByCategoryComponent },
    { path: '**', redirectTo: '/home' }
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
