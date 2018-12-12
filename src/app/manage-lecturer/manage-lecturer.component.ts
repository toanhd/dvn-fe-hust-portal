import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManageLecturerDialogComponent } from './manage-lecturer-dialog'


@Component({
  selector: 'app-manage-lecturer',
  templateUrl: './manage-lecturer.component.html',
  styleUrls: ['./manage-lecturer.component.scss']
})
export class ManageLecturerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(ManageLecturerDialogComponent, {
      width: '600px',
      data: {
        lecID: '',
        name: '',
        school: '',
      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

}
