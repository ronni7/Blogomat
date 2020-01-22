import {Component, OnInit} from '@angular/core';
import {ContextService} from '../../service/context.service';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  visible = true;
  menuHidden = true;

  constructor(private userContext: ContextService, private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuHidden = !this.menuHidden;
  }

  clearContext() {
    this.userContext.logout();
    this.themeService.setTheme('default');
  }
}
