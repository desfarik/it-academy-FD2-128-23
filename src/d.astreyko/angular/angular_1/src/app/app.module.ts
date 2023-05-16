import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CounterComponent} from "./components/counter/counter.component";
import {StopwatchComponent} from "./components/stopwatch/stopwatch.component";
import { BoxComponent } from './components/box/box.component';
import { ChildComponent } from './components/child/child.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    StopwatchComponent,
    BoxComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
