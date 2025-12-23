import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuPlannerComponent } from './components/menu-planner/menu-planner.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'menu-planner', component: MenuPlannerComponent, title: 'Menu Planner' },
  { path: 'shopping-list', component: ShoppingListComponent, title: 'Boodschappenlijst' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
