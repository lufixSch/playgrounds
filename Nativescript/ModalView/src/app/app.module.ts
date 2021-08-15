import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ModalDialogService, NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";

import { ModalModule } from "./modal/modal.module";

import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, ModalModule],
  declarations: [AppComponent, ItemsComponent],
  providers: [ModalDialogService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
