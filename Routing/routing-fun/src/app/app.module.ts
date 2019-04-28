import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlothComponent } from './sloth/sloth.component';
import { SlothInfoComponent } from './sloth/sloth-info/sloth-info.component';
import { SlothImageComponent } from './sloth/sloth-image/sloth-image.component';
import {SlothsService} from "./sloth/sloths.service";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SlothComponent,
    SlothInfoComponent,
    SlothImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SlothsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
