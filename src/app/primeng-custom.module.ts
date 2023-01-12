import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [],
    exports: [
        TableModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrimengCustomModule {
}



