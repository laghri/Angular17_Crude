import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeServiceService } from '../employe-service.service';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-delete-dialog',
  standalone:true,
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
  imports: [  MatDialogModule,MatButtonModule,MatSnackBarModule]

})
export class DeleteDialogComponent {

  constructor(
    private service: EmployeServiceService,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService:CoreService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false); // Close the dialog without deleting
  }

  onDeleteClick(): void {
    console.log("edfffffffffffffffffffffffffffffffffffffffffffffff")
    console.log(this.data.EmployeId);
   this.service.deleteEmploye(this.data.EmployeId);
   this._coreService.openSnackBar("deleted Successufly")

    this.dialogRef.close(true); // Close the dialog and confirm deletion
  }
}

