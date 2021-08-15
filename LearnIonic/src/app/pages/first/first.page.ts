import { Component, OnInit } from '@angular/core';
import { GeneratedFile } from '@angular/compiler';
import { async } from 'q';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  style = {
    left: '',
    top: '',
  };

  translateY = [0, 0, 0, 0, 0];

  offset = {
    x: 0,
    y: 0,
  };

  general = {
    width: '100%',
    height: '15%',
    margin: '2.5%',
    backgroundColor: '#000000',
  };

  div = [
    {
      ...this.general,
      transform: 'translateY(20px)',
    },
    {
      ...this.general,
      transform: '',
    },
    {
      ...this.general,
      transform: '',
    },
    {
      ...this.general,
      transform: '',
    },
    {
      ...this.general,
      transform: '',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.table(this.div);
  }

  panUp(e) {
    this.translateY.forEach((item, index) => {
      this.translateY[index] = e.deltaY;
      this.div[index].transform = 'translateY(' + item + 'px)';
    });
    console.log(this.translateY);
  }

  panDown(e) {
    this.translateY.forEach((item, index) => {
      this.translateY[index] = e.deltaY;
      this.div[index].transform = 'translateY(' + item + 'px)';
    });
  }

  panEnd(e) {}
}
