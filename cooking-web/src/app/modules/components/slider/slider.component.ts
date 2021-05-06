import { Component, ViewChild, ElementRef } from '@angular/core';
import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @ViewChild('slides') slidesContainer: ElementRef<HTMLDivElement>;

  onClickLeft() {
    this.slidesContainer.nativeElement.scrollLeft -= 200;
  }

  onClickRight() {
    this.slidesContainer.nativeElement.scrollLeft += 200;
  }
}
