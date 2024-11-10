import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button'; 
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

// Import standalone components
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddProductComponent,
    HomeComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule, 
    InputTextModule,
    FormsModule,
    CardModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    ReactiveFormsModule,
    TabViewModule,
    HttpClientModule,
    DropdownModule,
    
    // Import the standalone component instead of declaring it
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
