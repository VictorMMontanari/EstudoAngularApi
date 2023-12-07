import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() star: number = 0;

  maxRating: number = 5;
  currentRating: number = 0;

  ngOnInit() {
    this.calculateRating();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('star' in changes) {
      this.calculateRating();
    }
  }

  private calculateRating() {
    const roundedRating = Math.max(0, Math.min(Math.round(this.star * 2) / 2, this.maxRating));
    const hasHalfStar = this.star - roundedRating === 0.5;
    this.currentRating = hasHalfStar ? roundedRating - 0.5 : roundedRating;
  }

  getArray(value: number): number[] {
    return new Array(value);
  }
}
