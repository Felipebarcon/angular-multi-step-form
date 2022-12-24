import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { StepComponent } from './form-container/step/step.component';
import { PersonalInfoComponent } from './form-container/personal-info/personal-info.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectPlanComponent } from './form-container/select-plan/select-plan.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FormContainerComponent,
    StepComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [Validators],
  bootstrap: [AppComponent],
})
export class AppModule {}
