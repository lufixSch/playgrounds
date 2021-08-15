import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptCommonModule,
  NativeScriptRouterModule
} from "@nativescript/angular";

import { ModalComponent } from "./modal.component";
import { ModalViewComponent } from "./view/modal-view.component";
import { SecondModalViewComponent } from "./second-view/second-modal-view.component";

const routes: Routes = [
  { path: "modal-view", component: ModalViewComponent },
  { path: "second-modal-view", component: SecondModalViewComponent }
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [ModalComponent, ModalViewComponent, SecondModalViewComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ModalModule {}
