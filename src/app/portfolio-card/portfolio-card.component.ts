import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  img: string;

  @Input()
  summary: string;

  constructor() { }

  ngOnInit(): void {
  }

}
