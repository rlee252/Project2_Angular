import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Review} from '../../review';


@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {
  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
