import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../model/User";
import {SearchCriteria} from "./search.criteria";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(private http: HttpClient) {
  }

  firstClick() {
    return console.log('clicked');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  logIn(login: string, password: string) {
    // return this.http.post('https:8080/login', {login, password});
    return console.log(login, password);
  }

  register(user: User) {
   // return this.http.post('https:8080/login', user);
     return console.log(user);
  }

  getPosts(criteria: SearchCriteria): Post[] {
    const mock: Post[] = new Array<Post>();
    mock.push(new Post('Title1', ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'], null, 'c0ontentttttttttttttttttttttttttttttttttt'));
    mock.push(new Post('Title2', ['tag2', 'tag3', 'tag4', 'tag5'], null, 'c1ontentttttttttttttttttttttttttttttttttt'));
    mock.push(new Post('Title3', ['tag4', 'tag5'], null, 'contenttttttttt2ttttttttttttttttttttttttt'));
    mock.push(new Post('Title4', ['tag3', 'tag5'], null, 'contentttttttttttttttttt3tttttttttttttttt'));
    mock.push(new Post('Title5', ['tag1', 'tag3', 'tag4', 'tag5'], null, 'contentttt4tttttttttttttttttttttttttttttt'));
    mock.push(new Post('Title6', ['tag1', 'tag2', 'tag5'], null, 'contentttttttttttttt5tttttttttttttttttttt'));
    return mock;
  }
}
