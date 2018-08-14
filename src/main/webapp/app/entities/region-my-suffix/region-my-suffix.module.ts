import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Draft993SharedModule } from 'app/shared';
import {
    RegionMySuffixComponent,
    RegionMySuffixDetailComponent,
    RegionMySuffixUpdateComponent,
    RegionMySuffixDeletePopupComponent,
    RegionMySuffixDeleteDialogComponent,
    regionRoute,
    regionPopupRoute
} from './';

const ENTITY_STATES = [...regionRoute, ...regionPopupRoute];

@NgModule({
    imports: [Draft993SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RegionMySuffixComponent,
        RegionMySuffixDetailComponent,
        RegionMySuffixUpdateComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixDeletePopupComponent
    ],
    entryComponents: [
        RegionMySuffixComponent,
        RegionMySuffixUpdateComponent,
        RegionMySuffixDeleteDialogComponent,
        RegionMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Draft993RegionMySuffixModule {}
