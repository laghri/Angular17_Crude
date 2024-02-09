import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { RouterOutlet } from '@angular/router';
import { EmployeComponent } from "./employe/employe.component";
import { EmployeServiceService } from './employe-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';
import { EditAddComponent } from './edit-add/edit-add.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',

    imports: [  EmployeComponent,MatDialogModule,MatToolbarModule]
})
export class AppComponent {

  constructor(private _dialog: MatDialog){}
  OpenAddEditComponent(){
    this._dialog.open(EditAddComponent)
  }


}
export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
