import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeServiceService } from '../employe-service.service';
import { Employe } from '../Employe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-edit-add',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule,MatSnackBarModule],
  templateUrl: './edit-add.component.html',
  styleUrl: './edit-add.component.css'
})
export class EditAddComponent implements OnInit {
  EmployeForm: FormGroup;
  constructor(private _formBuilder:FormBuilder,
    private service:EmployeServiceService,
    private _dialogRef:MatDialogRef<EditAddComponent>,
    private _coreService:CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any){
    this.EmployeForm=this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      salaire: ['', [Validators.required, this.salaryValidator]],
      specialite: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  ngOnInit(): void {
    this.EmployeForm.patchValue(this.data);
  }
  hasError(controlName: string, errorName: string) {
    return this.EmployeForm.get(controlName)?.hasError(errorName);
  }
  salaryValidator(control: { value: number; }) {
    if (control.value <= 3000 && control.value!==null ) {
      return { 'salaryError': true };
    }
    return null;
  }
  OnSubmitForm(){
    if(this.EmployeForm.valid){

     if(this.data){
      let NewEmploye: Employe = {
        id: this.data.id ,
        name: this.EmployeForm.value.name,
        salaire:this.EmployeForm.value.salaire,
        specialite: this.EmployeForm.value.specialite,

    };
      console.log(NewEmploye)
          this.service.updateEmploye(NewEmploye);
     this._coreService.openSnackBar("Update succefuly");


      this._dialogRef.close();
     }
     else{
      this.service.addEmploye(this.EmployeForm.value)
      this._coreService.openSnackBar("Employee Added succefuly");

      this._dialogRef.close();

     }


    }
  }


  Close(){
    this._dialogRef.close();
  }

}
