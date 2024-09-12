import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    const app = new AppComponent();
    app.toggleMode();
    expect(app.darkMode).toBe(true);
    app.toggleMode();
    expect(app.darkMode).toBe(false);
  });
});
