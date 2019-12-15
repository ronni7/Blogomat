export class Post {

  private _title: string;
  private _tags: Array<any>;
  private _backgroundImage?: File;
  private _postContent: string;
  private _publishDate: Date;
  private _author: string;

  constructor(title: string, tags: Array<any>, backgroundImage: File, postContent: string, publishDate: Date, author: string) {
    this._title = title;
    this._tags = tags;
    this._backgroundImage = backgroundImage;
    this._postContent = postContent;
    this._publishDate = publishDate;
    this._author = author;
  }

  get postContent(): string {
    return this._postContent;
  }

  set postContent(value: string) {
    this._postContent = value;
  }

  get backgroundImage(): File {
    return this._backgroundImage;
  }

  set backgroundImage(value: File) {
    this._backgroundImage = value;
  }

  get tags(): Array<any> {
    return this._tags;
  }

  set tags(value: Array<any>) {
    this._tags = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get publishDate(): Date {
    return this._publishDate;
  }

  set publishDate(value: Date) {
    this._publishDate = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }
}
