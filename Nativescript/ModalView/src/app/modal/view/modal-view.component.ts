import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "modal-view",
  templateUrl: "modal-view.component.html"
})
export class ModalViewComponent implements OnInit {
  constructor(private _routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  onNavigate() {
    this._routerExtensions.navigate([
      "items",
      "modal-root",
      "second-modal-view"
    ]);
  }
}
