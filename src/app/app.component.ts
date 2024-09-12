import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// imports components
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    Child2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';

  darkMode = false;

  toggleMode() {
    this.darkMode = !this.darkMode;
  }

}


// JEST AND MIXINS IMPORT