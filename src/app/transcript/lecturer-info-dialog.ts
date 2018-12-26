import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppService} from '../app-services.service';


@Component({
    selector: 'app-lecturer-info-dialog',
    templateUrl: 'lecturer-info-dialog.html',
})
export class LecInfoDialogComponent implements OnInit {
    lecturer;

    constructor(
        public dialogRef: MatDialogRef<LecInfoDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data,
        private lectureSerice: AppService) {
    }

    ngOnInit(): void {
        this.lectureSerice.getLecByID(this.data.lecID).subscribe(
            data => {
                this.lecturer = data.info;
            },
            err => {
            }
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}