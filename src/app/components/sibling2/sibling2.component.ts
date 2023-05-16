import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/services/sibling.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  receivedData : any
  constructor(private siblingService : SiblingService) { }

  ngOnInit(): void {
    debugger
    this.siblingService.data$.subscribe(data => {
      this.receivedData = data;
    });
  }

}
