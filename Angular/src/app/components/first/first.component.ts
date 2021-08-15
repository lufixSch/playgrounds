import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"],
})
export class FirstComponent implements OnInit {
  @Input() text: string;

  items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  arr = [
    {
      message: "Hello",
      key: 1234,
    },
    {
      message: "Bye",
      key: 5035,
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.arr.filter((a) => a.key > 5000));

    console.log(this.arr.filter((v) => v.key === 1234));

    console.log(this.arr.filter((v) => v.key < 2345));
  }
}
