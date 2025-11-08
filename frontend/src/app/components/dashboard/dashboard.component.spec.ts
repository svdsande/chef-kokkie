import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let spectator: Spectator<DashboardComponent>;
  const createComponent = createComponentFactory(DashboardComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });
});
