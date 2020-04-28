import {ModuleWithProviders, NgModule} from '@angular/core';
import {LayoutsModule} from './layouts/layouts.module';

@NgModule({
  exports: [
    LayoutsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}

