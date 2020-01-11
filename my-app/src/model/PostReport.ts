export class PostReport {
  public id: number;
  public postID: number;
  public reporterID: number;
  public subject: string;
  public customSubject?: string;
  public message: string;


  constructor( postID: number, reporterID: number, subject: string, customSubject: string, message: string) {
    this.postID = postID;
    this.reporterID = reporterID;
    this.subject = subject;
    this.customSubject = customSubject;
    this.message = message;
  }
}
