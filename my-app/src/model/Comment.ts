export class Comment {
  id: number;
  postID: number;
  posted: Date;
  author: string;
  content: string;

  constructor(postID: number, posted: Date, author: string, content: string) {
    this.postID = postID;
    this.posted = posted;
    this.author = author;
    this.content = content;
  }
}

