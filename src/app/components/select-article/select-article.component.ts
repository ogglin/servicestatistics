import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-select-article',
  templateUrl: './select-article.component.html',
  styleUrls: ['./select-article.component.scss']
})
export class SelectArticleComponent implements OnInit {
  allArticles: number[];

  constructor() {
    this.allArticles = [1000001, 1000002, 1000003];
  }

  ngOnInit() {
  }

}
