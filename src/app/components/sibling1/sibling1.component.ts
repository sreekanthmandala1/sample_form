import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiblingService } from 'src/app/services/sibling.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  constructor(private siblingService : SiblingService, private router : Router) { }

  ngOnInit(): void {
  }

  sendData() {
    debugger
    const data = true
    this.siblingService.sendData(data);
    this.router.navigate(['/','sibling2'])
  }

}
