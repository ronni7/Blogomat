import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {SearchCriteria} from '../model/SearchCriteria';
import {Post} from '../model/Post';
import {ContactMessage} from '../model/ContactMessage';
import {UserDetails} from '../model/UserDetails';
import {DatePipe} from '@angular/common';
import {PostReport} from '../model/PostReport';
import {Comment} from '../model/Comment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestHttpServiceService {

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }

  logIn(login: string, password: string): Observable<any>  {
    return this.http.post('http://localhost:8080/user/login', {login, password});
  //  return console.log(login, password);
  }

  register(user: User): Observable<any>  {
     return this.http.post('https:8080/user/register', user);

  }

  getPosts(criteria: SearchCriteria): Post[] {
    let mock: Post[] = new Array<Post>();
    let id = 1;
    mock.push(new Post(id++, 'Title1', ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'], null, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n' +
      '    aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Elit eget gravida cum sociis natoque\n' +
      '    penatibus et magnis. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Adipiscing elit pellentesque\n' +
      '    habitant morbi tristique senectus et netus. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vitae\n' +
      '    tortor condimentum lacinia quis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Mi ipsum\n' +
      '    faucibus vitae aliquet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar\n' +
      '    pellentesque habitant morbi tristique. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nulla\n' +
      '    posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. At augue eget arcu dictum varius duis at.\n' +
      '    Venenatis\n' +
      '    tellus in metus vulputate. Arcu risus quis varius quam quisque. Arcu non sodales neque sodales ut etiam sit.\n' +
      '    Faucibus\n' +
      '    purus in massa tempor. Justo donec enim diam vulputate ut pharetra sit amet. Velit scelerisque in dictum non.\n' +
      '\n' +
      '    Sollicitudin tempor id eu nisl nunc. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut etiam\n' +
      '    sit amet nisl purus. Et ultrices neque ornare aenean. Neque sodales ut etiam sit amet nisl. Nisi est sit amet\n' +
      '    facilisis magna. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Lacinia quis vel eros donec ac\n' +
      '    odio tempor orci. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Praesent semper feugiat nibh sed\n' +
      '    pulvinar. Elit duis tristique sollicitudin nibh. Nec ultrices dui sapien eget mi proin sed libero. In cursus turpis\n' +
      '    massa tincidunt dui ut.', new Date(Date.parse('2019-12-12')), 'User1'));
    mock.push(new Post(id++, 'Title2', ['tag2', 'tag3', 'tag4', 'tag5'], null, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n' +
      '    aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Elit eget gravida cum sociis natoque\n' +
      '    penatibus et magnis. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Adipiscing elit pellentesque\n' +
      '    habitant morbi tristique senectus et netus. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vitae\n' +
      '    tortor condimentum lacinia quis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Mi ipsum\n' +
      '    faucibus vitae aliquet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar\n' +
      '    pellentesque habitant morbi tristique. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nulla\n' +
      '    posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. At augue eget arcu dictum varius duis at.\n' +
      '    Venenatis\n' +
      '    tellus in metus vulputate. Arcu risus quis varius quam quisque. Arcu non sodales neque sodales ut etiam sit.\n' +
      '    Faucibus\n' +
      '    purus in massa tempor. Justo donec enim diam vulputate ut pharetra sit amet. Velit scelerisque in dictum non.\n' +
      '\n' +
      '    Sollicitudin tempor id eu nisl nunc. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut etiam\n' +
      '    sit amet nisl purus. Et ultrices neque ornare aenean. Neque sodales ut etiam sit amet nisl. Nisi est sit amet\n' +
      '    facilisis magna. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Lacinia quis vel eros donec ac\n' +
      '    odio tempor orci. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Praesent semper feugiat nibh sed\n' +
      '    pulvinar. Elit duis tristique sollicitudin nibh. Nec ultrices dui sapien eget mi proin sed libero. In cursus turpis\n' +
      '    massa tincidunt dui ut.', new Date(Date.parse('2019-12-13')), 'User1'));
    mock.push(new Post(id++, 'Title3', ['tag4', 'tag5'], null, ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n' +
      '    aliqua. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Elit eget gravida cum sociis natoque\n' +
      '    penatibus et magnis. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Adipiscing elit pellentesque\n' +
      '    habitant morbi tristique senectus et netus. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Vitae\n' +
      '    tortor condimentum lacinia quis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Mi ipsum\n' +
      '    faucibus vitae aliquet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Pulvinar\n' +
      '    pellentesque habitant morbi tristique. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nulla\n' +
      '    posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. At augue eget arcu dictum varius duis at.\n' +
      '    Venenatis\n' +
      '    tellus in metus vulputate. Arcu risus quis varius quam quisque. Arcu non sodales neque sodales ut etiam sit.\n' +
      '    Faucibus\n' +
      '    purus in massa tempor. Justo donec enim diam vulputate ut pharetra sit amet. Velit scelerisque in dictum non.\n' +
      '\n' +
      '    Sollicitudin tempor id eu nisl nunc. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut etiam\n' +
      '    sit amet nisl purus. Et ultrices neque ornare aenean. Neque sodales ut etiam sit amet nisl. Nisi est sit amet\n' +
      '    facilisis magna. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Lacinia quis vel eros donec ac\n' +
      '    odio tempor orci. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Praesent semper feugiat nibh sed\n' +
      '    pulvinar. Elit duis tristique sollicitudin nibh. Nec ultrices dui sapien eget mi proin sed libero. In cursus turpis\n' +
      '    massa tincidunt dui ut.', new Date(Date.parse('2019-12-14')), 'User1'));
    mock.push(new Post(id++, 'Title4', ['tag3', 'tag5'], null, 'contentttttttttttttttttt3tttttttttttttttt', new Date(Date.parse('2019-12-15')), 'User1'));
    mock.push(new Post(id++, 'Title5', ['tag1', 'tag3', 'tag4', 'tag5'], null, 'contentttt4tttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-16')), 'User1'));
    mock.push(new Post(id++, 'Title6', ['tag1', 'tag2', 'tag5'], null, 'contentttttttttttttt5tttttttttttttttttttt', new Date(Date.parse('2019-12-17')), 'User1'));
    mock.push(new Post(id++, 'Title7', ['tag2', 'tag3', 'tag4', 'tag5'], null, 'c1ontentttttt6tttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-18')), 'User1'));
    mock.push(new Post(id++, 'Title8', ['tag4', 'tag5'], null, 'contenttttttttt7ttttttttttttttttttttttttt', new Date(Date.parse('2019-12-19')), 'User1'));
    mock.push(new Post(id++, 'Title9', ['tag3', 'tag5'], null, 'contentttttttttttttttttt83tttttttttttttttt', new Date(Date.parse('2019-12-20')), 'User1'));
    mock.push(new Post(id++, 'Title10', ['tag1', 'tag3', 'tag4', 'tag5'], null, 'contentttt9tttttttttttttttttttttttttttttt', new Date(Date.parse('2019-12-21')), 'User1'));
    mock.push(new Post(id++, 'Title11', ['tag1', 'tag2', 'tag5'], null, 'contentttttttttttttt10tttttttttttttttttttt', new Date(Date.parse('2019-12-22')), 'User1'));

    if (criteria.title) {
      const result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (value.title.includes(criteria.title)) {
          result.push(value);
        }
      });
      mock = result;
    }
    if (criteria.author) {
      const result: Post[] = new Array<Post>();
      mock.forEach(value => {
        if (value.author.includes(criteria.author)) {
          result.push(value);
        }
      });
      mock = result;
    }
    if (criteria.tags && criteria.tags[0]) {
      const result: Post[] = new Array<Post>();
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
    // return this.http.post('https:8080/admin/contact', value; //
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

  addPost(post: Post): Observable<any> {
    return this.http.post('http://localhost:8080/post/add', post);
  }


  reportPost(report: PostReport): Observable<any>  {
    return this.http.post('http://localhost:8080/post/reportPost', report);

  }

  getPostsSorted(sortField: string, order: 'ASC' | 'DESC'): Observable<any> {
    return this.http.get('http://localhost:8080/post/posts' +
      '?sort=' + sortField.trim() + '&order=' + order);
  }

  getLikes(postID: number): Observable<any> {
    return this.http.post('http://localhost:8080/post/getLikes', postID);
  }

  likePost(postID: number, userID: number): Observable<any> {
    // return this.http.post('http://localhost:8080/post/postsTest/{$postID}', userID);
    return this.http.post('http://localhost:8080/post/like', {postID, userID});
  }

  getReports(): Observable<any> {
    return this.http.get('http://localhost:8080/admin/reports');
  }

  getComments(postID: number): Observable<any> {
    return this.http.post('http://localhost:8080/comment/getComments', postID);
  }

  deletePost(postID: number): Observable<any> {
    return this.http.delete('http://localhost:8080/admin/deletePost/' + postID);

  }

  deleteReport(reportID: number): Observable<any> {
    return this.http.delete('http://localhost:8080/admin/deleteReport/' + reportID);
  }

  addComment(commentContent: Comment): Observable<any> {
    return this.http.post('http://localhost:8080/comment/addComment', commentContent);
  }

  getPostsSortedByLikes(): Observable<any> {
    return this.http.get('http://localhost:8080/post/postsSortedByLikes');
  }


  getPostsSortedWithCriteria(sortField: string, order: 'ASC' | 'DESC', criteria: SearchCriteria): Observable<any> {
    return this.http.post('http://localhost:8080/post/postsFiltered',
      {sort: sortField.trim(), order: order, searchCriteria: criteria}
      );
  }
}
