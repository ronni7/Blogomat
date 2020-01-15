import {Injectable} from '@angular/core';
import {Theme} from './Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {

  }

  private active: Theme;
  private availableThemes: Theme[] = this.createDefaultThemes();

  private createDefaultThemes() {
    const themes = new Array<Theme>();
    let theme = new Theme();
    theme.name = 'default';
    theme.properties = {
      ' --button-color': 'white;',
      ' --button-background-color': ' #202020;',
      ' --button-border-color': '#c011ff;',
      ' --disabled': 'gray;',
      ' --button-disabled': 'darkgray;',
    };
    themes.push(theme);
    const theme2 = new Theme();
    theme2.name = 'light';
    theme2.properties = {
      ' --button-color': 'black;',
      ' --button-background-color': ' black;',
      ' --button-border-color': '#lack;',
      ' --disabled': 'black;',
      ' --button-disabled': 'black;',
    };
    themes.push(theme2);
    return themes;
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  /* isDarkTheme(): boolean {
     return this.active.name === dark.name;
   }

   setDarkTheme(): void {
     this.setActiveTheme(dark);
   }

   setLightTheme(): void {
     this.setActiveTheme(light);
   }*/
  setTheme(name: string): void {
    this.setActiveTheme(this.getTheme(name));
  }

  public getTheme(name: string) {
    console.log('kurwa', this.availableThemes);
    console.log('searchin', this.availableThemes.find(val => val.name === name));
    return this.availableThemes.find(val => val.name === name);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    console.log('THEME', this.active);

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
    console.log('STYLE KURWAQ', document);
  }
}
