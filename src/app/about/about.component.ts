import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.about = this.dataService.data.about;
  }

}
