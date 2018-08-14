import { NgModule } from '@angular/core';

import { Draft993SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Draft993SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Draft993SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Draft993SharedCommonModule {}
