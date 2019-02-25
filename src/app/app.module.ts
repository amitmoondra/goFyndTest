import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import {  } from './components/grid-layout/grid-layout.component';
import { GridLayoutService } from './services/gridLayout.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ImageCardDialogComponent } from './components/image-card/image-card-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/materialize.module';


@NgModule({
  declarations: [
    AppComponent,
    GridLayoutComponent,
    ImageCardComponent,
    ImageCardDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  entryComponents: [
    ImageCardDialogComponent
  ],
  providers: [
    GridLayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
