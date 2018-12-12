import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'app-grading',
    templateUrl: './grading.component.html',
    styleUrls: ['./grading.component.scss']
})
export class GradingComponent implements OnInit {

    gradingForm = new FormGroup({
        courseName: new FormControl(''),
        gradeVal: new FormControl(''),
        semester: new FormControl(''),
    });
    studentForm = new FormGroup({
        stdID: new FormControl(''),
    });

    constructor() {
    }

    ngOnInit() {
    }

    onGrading() {
        console.log(this.gradingForm.value);
        const gradingInfo = this.gradingForm.value;
        gradingInfo.stdID = this.studentForm.value.stdID;
        console.log(gradingInfo);
    }

    onSearching() {
        console.log(this.studentForm.value.stdID);
    }
}
