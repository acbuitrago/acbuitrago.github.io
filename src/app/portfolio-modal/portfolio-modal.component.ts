import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.scss']
})
export class PortfolioModalComponent implements OnInit {

  project: any;

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log(this.project);
  }

}
