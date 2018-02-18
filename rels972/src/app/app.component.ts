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

  routing_menu = [];

  constructor() {
    const r = [ // add routing menu
      { name: 'Home', path: '' },
      { name: 'OMG YOU SEE ME', path: 'depend_on_routing_module_DEV_add_but_no_need_to_delete'}
    ];

    const paths = routes.map(_ => _.path);
    r.filter(_ => paths.indexOf(_.path) >= 0).forEach(_ => this.routing_menu.push(_));

  }
}
