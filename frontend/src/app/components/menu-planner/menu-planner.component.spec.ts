import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MenuPlannerComponent } from './menu-planner.component';

describe('MenuPlannerComponent', () => {
  let spectator: Spectator<MenuPlannerComponent>;
  const createComponent = createComponentFactory(MenuPlannerComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
