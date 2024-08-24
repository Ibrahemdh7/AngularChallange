import { Component } from '@angular/core';
import { faHome, faFileAlt, faCogs, } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css'
})
export class LeftMenuComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faFileAlt, faCogs);
  }
}
