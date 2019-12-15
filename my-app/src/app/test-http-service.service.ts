import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {SearchCriteria} from '../model/SearchCriteria';
import {Post} from '../model/Post';
import {ContactMessage} from '../model/ContactMessage';
import {UserDetails} from '../model/UserDetails';
import {DatePipe} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {
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
    var mock: Post[] = new Array<Post>();
    mock.push(new Post('Title1', ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'], null, 'c0ontentttttttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-12')), 'User1'));
    mock.push(new Post('Title2', ['tag2', 'tag3', 'tag4', 'tag5'], null, 'c1ontentttttttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-13')), 'User1'));
    mock.push(new Post('Title3', ['tag4', 'tag5'], null, 'contenttttttttt2ttttttttttttttttttttttttt', new Date(Date.parse('2019-12-14')), 'User1'));
    mock.push(new Post('Title4', ['tag3', 'tag5'], null, 'contentttttttttttttttttt3tttttttttttttttt', new Date(Date.parse('2019-12-15')), 'User1'));
    mock.push(new Post('Title5', ['tag1', 'tag3', 'tag4', 'tag5'], null, 'contentttt4tttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-16')), 'User1'));
    mock.push(new Post('Title6', ['tag1', 'tag2', 'tag5'], null, 'contentttttttttttttt5tttttttttttttttttttt', new Date(Date.parse('2019-12-17')), 'User1'));
    mock.push(new Post('Title7', ['tag2', 'tag3', 'tag4', 'tag5'], null, 'c1ontentttttt6tttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-18')), 'User1'));
    mock.push(new Post('Title8', ['tag4', 'tag5'], null, 'contenttttttttt7ttttttttttttttttttttttttt', new Date(Date.parse('2019-12-19')), 'User1'));
    mock.push(new Post('Title9', ['tag3', 'tag5'], null, 'contentttttttttttttttttt83tttttttttttttttt', new Date(Date.parse('2019-12-20')), 'User1'));
    mock.push(new Post('Title10', ['tag1', 'tag3', 'tag4', 'tag5'], null, 'contentttt9tttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-21')), 'User1'));
    mock.push(new Post('Title11', ['tag1', 'tag2', 'tag5'], null, 'contentttttttttttttt10tttttttttttttttttttt', new Date(Date.parse('2019-12-22')), 'User1'));

    if (criteria.title) {
      let result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (value.title.includes(criteria.title)) {
          result.push(value);
        }
      });
      mock = result;
    }
    if (criteria.author) {
      let result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (value.author.includes(criteria.author)) {
          result.push(value);
        }
      });
      mock = result;
    }
    if (criteria.tags && criteria.tags[0]) {
      let result: Post[] = new Array<Post>();
      mock.forEach(value => {
        for (const tag of criteria.tags) {
          if (value.tags.some(x => x === tag)) {
            result.push(value);
            break;
          }
        }

      });
      mock = result;
    }
    if (criteria.publishDateFrom) {
      const result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (this.datePipe.transform(value.publishDate, 'yyyy-MM-dd')
          >= this.datePipe.transform(criteria.publishDateFrom, 'yyyy-MM-dd')) {
          result.push(value);
        }
      });
      mock = result;
    }
    if (criteria.publishDateTo) {
      const result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (this.datePipe.transform(value.publishDate, 'yyyy-MM-dd')
          < this.datePipe.transform(criteria.publishDateTo, 'yyyy-MM-dd')) {
          result.push(value);
        }
      });
      mock = result;
    }
    mock.sort((a, b) => {
      return a.publishDate < b.publishDate ? 1 : -1;
    });
    /*    const lastResultIndex: number = criteria.page * criteria.dataPerPage;
        console.log(lastResultIndex, 'ostatni index');
        console.log(criteria.dataPerPage, 'postow nas stronę');
        console.log('czyli uzyskana tablica to', mock.slice(lastResultIndex - criteria.dataPerPage, lastResultIndex));
        return mock.slice(lastResultIndex - criteria.dataPerPage, lastResultIndex);*/
    return mock;
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
    user.facebook = 'www.facebook.com/test.user1';
    user.instagram = 'www.instargram.com/test.user1';
    user.twitter = 'www.twitter.com/test.user1';
    user.snapchat = 'www.snapchat.com/test.user1';
    return user;
  }


  saveUserDetails(user: UserDetails) {
    // return this.http.post('https:8080/user/saveUserDetails', user); //todo check if right, may use PUT or user ID in post
    console.log('this is user', user);
  }
}
