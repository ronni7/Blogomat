import {Injectable} from '@angular/core';
import {Theme} from '../model/Theme';

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
      '--button-color': 'white',
      '--button-background-color': ' #202020',
      '--button-border-color': '#c011ff',
      '--disabled': 'gray',
      '--button-disabled': 'darkgray',
      '--form-color': 'black',
      '--panel-background-gradient1': '#c011ff',
      '--panel-background-gradient2': '#0004e5',
      '--main-navigation-link': 'black',
      '--header-link': 'black',
      '--tooltip-hover': '#eafcff',
      '--tooltip-transparent-hover': 'lightblue',
      '--form-control-border': 'darkgreen',
      '--text-visible': 'white',
      '--tag-background': 'aquamarine',
      '--label-text': '#ffffff'
    };
    themes.push(theme);
    const theme2 = new Theme();
    theme2.name = 'light';
    theme2.properties = {
      '--button-color': 'white',
      '--button-background-color': ' #green',
      '--button-border-color': 'lightgreen',
      '--disabled': 'gray',
      '--button-disabled': 'darkgray',
      '--form-color': '#870045',
      '--panel-background-gradient1': 'lightgreen',
      '--panel-background-gradient2': 'darkgreen',
      '--main-navigation-link': 'black',
      '--header-link': 'black',
      '--tooltip-hover': '#eafcff',
      '--tooltip-transparent-hover': 'lightblue',
      '--form-control-border': 'darkgreen',
      '--text-visible': 'white',
      '--tag-background': 'aquamarine',
      '--label-text': '#ffffff'
    };
    themes.push(theme2);
    const theme3 = new Theme();
    theme3.name = 'sunny';
    theme3.properties = {
      '--button-color': 'red',
      '--button-background-color': ' #violet',
      '--button-border-color': 'red',
      '--disabled': 'black',
      '--button-disabled': 'darkgray',
      '--form-color': 'gold',
      '--panel-background-gradient1': 'yellow',
      '--panel-background-gradient2': 'lightblue',
      '--main-navigation-link': 'red',
      '--header-link': 'red',
      '--tooltip-hover': 'lightblue',
      '--tooltip-transparent-hover': '#eafcff',
      '--form-control-border': 'darkgreen',
      '--text-visible': 'red',
      '--tag-background': 'darkorange',
      '--label-text': 'black'
    };
    themes.push(theme3);
    const theme4 = new Theme();
    theme4.name = 'retro';
    theme4.properties = {
      '--button-color': 'black',
      '--button-background-color': ' white',
      '--button-border-color': 'black',
      '--disabled': 'gray',
      '--button-disabled': 'darkgray',
      '--form-color': 'lightgray',
      '--panel-background-gradient1': '#0004e5',
      '--panel-background-gradient2': 'blue',
      '--main-navigation-link': 'black',
      '--header-link': 'black',
      '--tooltip-hover': 'lightblue',
      '--tooltip-transparent-hover': 'lightblue',
      '--form-control-border': 'darkgreen',
      '--text-visible': 'black',
      '--tag-background': 'blue',
      '--label-text': 'black'
    };
    themes.push(theme4);
    return themes;
  }

  setTheme(name: string): void {
    this.setActiveTheme(this.getTheme(name));
  }

  public getTheme(name: string) {
    return this.availableThemes.find(val => val.name === name);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
