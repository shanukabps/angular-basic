import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './component/navigation/navigation.component';
import { TextboxComponent } from './widget/textbox/textbox.component';
import { SelectItemComponent } from './widget/select-item/select-item.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent,
    TextboxComponent,
    SelectItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
