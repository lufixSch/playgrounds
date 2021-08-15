import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "modal-root",
  templateUrl: "modal.component.html"
})
export class ModalComponent implements OnInit {
  constructor(
    private _routerExtensions: RouterExtensions,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._routerExtensions.navigate(["modal-root", "modal-view"], {
      relativeTo: this._activeRoute
    });
  }
}
