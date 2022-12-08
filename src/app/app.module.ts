import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { StepComponent } from './form-container/step/step.component';
import { PersonalInfoComponent } from './form-container/personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    StepComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
