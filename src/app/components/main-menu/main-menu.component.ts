import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Output() exit = new EventEmitter<boolean>();

  username = '';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    if (this.cookieService.check('Username')) {
      this.username = this.cookieService.get('Username');
    }
  }

  onExit() {
    this.exit.emit();
  }

}
