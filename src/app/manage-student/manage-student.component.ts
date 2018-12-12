import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManageStudentDialogComponent } from './manage-student-dialog'


@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(ManageStudentDialogComponent, {
      width: '600px',
      data: {
        stdID: '',
        name: '',
        school: '',
        intakeYear: ''
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

}
