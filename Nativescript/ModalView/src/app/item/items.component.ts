import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html"
})
export class ItemsComponent {
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef
  ) {}

  onTap() {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: false
    };

    this._modalService
      .showModal(ModalComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }
}
