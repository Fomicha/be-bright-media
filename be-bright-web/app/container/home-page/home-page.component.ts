import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {

  showNavigationArrows = false;

  showNavigationIndicators = true;

  images: Array<string> = [
    'https://firebasestorage.googleapis.com/v0/b/be-bright-media.appspot.com/o/IMG_7225.jpg?alt=media&token=285d1108-3d64-416e-af1a-4c84a38182bf',
    'https://firebasestorage.googleapis.com/v0/b/be-bright-media.appspot.com/o/iNaFKrXBF5g.jpg?alt=media&token=84397e66-5450-406f-b1c3-cdf58998a7cc',
    'https://firebasestorage.googleapis.com/v0/b/be-bright-media.appspot.com/o/photo_2018-05-05_16-12-54.jpg?alt=media&token=cd3865be-215d-4270-8969-3a4560974b93'
  ];

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
    config.interval = 6000;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }

  ngOnInit() {
  }

}
