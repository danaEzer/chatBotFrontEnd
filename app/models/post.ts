import { Auther } from "./auther";

export class Post {
    id: string;
    title: string;
    auther: Auther;
    date: Date;
    content: string;
    comments: Array<Post>;

    constructor(title, auther, date, content) {
        this.title = title;
        this.auther = auther;
        this.date = date;
        this.content = content;
        this.comments = new Array<Post>();

        var number = Math.random() // 0.9394456857981651
        number.toString(36); // '0.xtis06h6'
        this.id = number.toString(36).substr(2, 9); // 'xtis06h6'
    }

    setComment(comment) {
        this.comments.push(comment);
    }
}
