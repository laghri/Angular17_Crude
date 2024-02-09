import { Component, ElementRef, ViewChild, computed, effect, signal } from '@angular/core';
import { EmployeServiceService } from '../employe-service.service';
import { Router } from 'express';
import { FormsModule, NgModel } from '@angular/forms';
import { Employe } from '../Employe';
import { Subject } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { EditAddComponent } from '../edit-add/edit-add.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormField } from '@angular/material/form-field';
@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatFormField
  ],
  providers:[],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {
  errorMessage: string="";

  constructor(private service: EmployeServiceService,private dialog: MatDialog) {}


   employes= this.service.Employes;


  openDeleteDialog(EmployeId: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { EmployeId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {


      }
    });
  }

  openEdiForm(data: any) {
    const dialogRef = this.dialog.open(EditAddComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
}
