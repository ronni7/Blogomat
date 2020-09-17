import {Injectable} from '@angular/core';
import {ApplicationContext} from '../model/ApplicationContext';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private _context: ApplicationContext;

  constructor() {
    this._context = new ApplicationContext();
    this._context.id = -1;
    this._context.role = 'unknown';
    this._context.username = 'guest';
  }

  set context(value: ApplicationContext) {
    this._context = value;
  }

  getRole(): string {
    return this._context.role;
  }

  getUsername(): string {
    return this._context.username;
  }

  getID(): number {
    return this._context.id;
  }

  logout() {
    this.context = null;
  }
}
