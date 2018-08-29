import { MatButtonModule, MatCheckboxModule,
     MatFormFieldModule, 
     MatSelectModule,
      MatIconModule,
      MatInputModule,
      } from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        NgbModule],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        NgbModule],
})
export class MaterialModule { }