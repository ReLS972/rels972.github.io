import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReLS972';
  themes = [
    '',
    'dark-theme'
  ];
  current_theme_id = 0;

  routes = [
    { name: 'Home', path: '' },
    { name: 'RSS-Intelligence', path: 'rss-i' },
  ];
}
