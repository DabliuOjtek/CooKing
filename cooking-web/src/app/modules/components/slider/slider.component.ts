import { Component, ContentChildren, ViewChild, QueryList, ElementRef, ViewChildren } from '@angular/core';
import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ViewChild('slides') slidesContainer: ElementRef<HTMLDivElement>;

  onClickLeft() {
    this.slidesContainer.nativeElement.scrollLeft -= 200;
  }

  onClickRight() {
    this.slidesContainer.nativeElement.scrollLeft += 200;
  }

  // onClickLeft() {
  //   this.slidesContainer.nativeElement.scrollLeft -= this.slidesContainer.nativeElement.offsetWidth;
  // }

  // onClickRight() {
  //   this.slidesContainer.nativeElement.scrollLeft += this.slidesContainer.nativeElement.offsetWidth;
  // }


  // onClickLeft() {
  //   console.log('-----------------------------------------------------');
  //   console.log('scrollLeft ' + this.slidesContainer.nativeElement.scrollLeft);
  //   console.log('currentItem offsetWidth ' + this.currentItem.nativeElement.offsetWidth);
  //   this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;
  //   console.log('currentItem offsetWidth  ' + this.currentItem.nativeElement.offsetWidth);
  //   console.log('slider ' + this.slidesIndex);
  //   if (this.slidesIndex > 0) {
  //     this.slidesIndex--;
  //     console.log(this.slidesIndex);
  //   }
  // }

  // onClickRight() {
  //   console.log('-----------------------------------------------------')
  //   console.log('scrollRight ' + this.slidesContainer.nativeElement.scrollLeft);
  //   console.log('currentItem offsetWidth ' + this.currentItem.nativeElement.offsetWidth);
  //   this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;
  //   console.log('currentItem offsetWidth  ' + this.currentItem.nativeElement.offsetWidth);
  //   console.log('slider ' + this.slidesIndex);
  //   console.log(this.currentItem.nativeElement.offsetWidth);
  //   if (this.slidesIndex < this.items.length - 1) {
  //     this.slidesIndex++;
  //   }
  // }

}



