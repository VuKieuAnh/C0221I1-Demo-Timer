import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  today = new Date();
  user = {
    name: 'bob mike'
  };

  price = 15000;
  symbol = 'USD';

  constructor() { }

  ngOnInit(): void {
  }

}
