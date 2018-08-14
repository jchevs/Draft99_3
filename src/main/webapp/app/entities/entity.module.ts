import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Draft993RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Draft993CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Draft993LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Draft993DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Draft993TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Draft993EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Draft993JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Draft993JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Draft993RegionMySuffixModule,
        Draft993CountryMySuffixModule,
        Draft993LocationMySuffixModule,
        Draft993DepartmentMySuffixModule,
        Draft993TaskMySuffixModule,
        Draft993EmployeeMySuffixModule,
        Draft993JobMySuffixModule,
        Draft993JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Draft993EntityModule {}
