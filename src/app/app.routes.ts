import { Routes } from '@angular/router';
import { FormContainerComponent } from './form-container/form-container.component';
import { SelectPlanComponent } from './form-container/select-plan/select-plan.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: FormContainerComponent,
  },
  {
    path: 'selectplan',
    component: SelectPlanComponent,
  },
];
