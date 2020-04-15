import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate, group, query, animateChild, sequence } from '@angular/animations';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        sequence([
          animate(100),
          query('@Bounce', animateChild())
        ])
      ])
    ]),
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(-150%)', opacity: 0 }),
        animate('0.3s ease-in')
      ]),
      transition(':leave', [
        animate('0.1s ease-out', style({ transform: 'translateY(-150%)' }))
      ])
    ]),
    trigger('Bounce', [
      state('flyIn', style({ transform: 'scale(1)' })),
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0 }),
        animate('0.3s ease-in')
      ]),
      transition(':leave', [
        animate('0.1s ease-out', style({ transform: 'scale(0.1)' }))
      ])
    ])
  ]
})
export class PortfolioCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  img: string;

  @Input()
  summary: string;

  @Input()
  techs: string[];

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
