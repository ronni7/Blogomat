import {User} from './User';

export class SearchCriteria {
  token: string;
  user: User;
  page: number = 1;
  dataPerPage: number;
  tags: any[];
  author: string; // or User // or id
  title: string;
  publishDateFrom: Date;
  publishDateTo: Date;
}
