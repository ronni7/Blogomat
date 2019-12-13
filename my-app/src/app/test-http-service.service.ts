import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {SearchCriteria} from '../model/SearchCriteria';
import {Post} from '../model/Post';
import {ContactMessage} from '../model/ContactMessage';
import {UserDetails} from '../model/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(private http: HttpClient) {
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
    let filtered: Post[] = mock;
    if (criteria) {
      if (criteria.title) {
        filtered = filtered.filter(value => {
          value.title.includes(criteria.title);
        });
      }
     /* if (criteria.tags) {
        filtered= filtered.filter(value => {value.tags.})
      }*/
   /*   if (criteria.publishDateFrom) {
        filtered.filter()
      }
      if (criteria.publishDateTo) {
      }*/
    }
    return filtered;
  }

  sendContactMessage(value: ContactMessage) {
    console.log(value, ' Message sent');
  }

  getUserDetails(userID: number): UserDetails {
    // return this.http.get('https:8080/getUserDetails/{{userID}}'); // todo check if right
    const user = new UserDetails();
    user.id = 1;
    user.username = 'Username1';
    user.name = 'Name1';
    user.surname = 'Surname1';
    user.email = 'email@email.com';
    user.registered = new Date();
    user.postsCount = 100;
    user.image = null;
    return user;
  }

  saveUserDetails(user: UserDetails) {
    // return this.http.post('https:8080/user/saveUserDetails', user); //todo check if right, may use PUT or user ID in post
    console.log('this is user', user);
  }
}
