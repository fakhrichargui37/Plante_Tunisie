import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule, MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, RouterModule] // Include RouterModule here
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Add',
        icon: 'pi pi-plus',
        items: [
          {
            label: 'Product',
            icon: 'pi pi-plus',
            routerLink: ['/add-product']
          },
          {
            label: 'Category',
            icon: 'pi pi-server',
            routerLink: ['/add-category']
          },
          {
            label: 'User',
            icon: 'pi pi-user',
          }
        ]
      },
      {
        label: 'Category',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          },
          {
            separator: true
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ];
  }
}
