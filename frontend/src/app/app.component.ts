import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatDividerModule, MatIconModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly router = inject(Router);

  readonly menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Boodschappenlijst', icon: 'shopping_cart', route: '/shopping-list' },
    { label: 'Menu planner', icon: 'menu_book_2', route: '/menu-planner' }
  ];

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
