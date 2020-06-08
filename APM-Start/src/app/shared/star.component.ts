import {
  Component,
  OnChanges,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'shop-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Product's rating:  ${this.rating}`);
  }
}