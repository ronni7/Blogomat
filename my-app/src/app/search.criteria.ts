import {User} from '../model/User';

export class SearchCriteria {
  token: string = ' token';
  user: User;
  page: number = 1;
  dataPerPage: number;
  tags: any[];
  author: User; // or id
  title: string;
}
