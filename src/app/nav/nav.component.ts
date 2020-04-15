import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  about: any;
  isCollapsed = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.about = this.dataService.data.about;
  }

}
