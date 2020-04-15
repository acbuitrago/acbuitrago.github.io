import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.portfolio = this.dataService.data.portfolio;
  }

}
