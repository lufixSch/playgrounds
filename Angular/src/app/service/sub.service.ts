import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SubService {
  constructor() {}

  log() {
    console.log("hey");
  }
}
