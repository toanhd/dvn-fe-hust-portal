import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {StudentService} from '../student-services/student.service';

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

    studentInfo;
    studentQueryMess;

    constructor(
        private studentService: StudentService
    ) {
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
        this.studentQueryMess = undefined;
        this.studentInfo = undefined;
        this.studentService.getbyID(this.studentForm.value.stdID)
            .subscribe(
                data => {
                    const studentResponse = {
                        stdID: '',
                        intakeYear: '',
                        name: '',
                        school: '',
                        dob: ''
                    };
                    studentResponse.stdID = data.stdID;
                    studentResponse.intakeYear = data.intakeYear;
                    studentResponse.name = data.info.name;
                    studentResponse.school = data.info.school;
                    studentResponse.dob = data.info.dob;
                    this.studentInfo = studentResponse;
                },
                err => {
                    // console.log(err);
                    this.studentQueryMess = err.error.message;
                }
            );
    }
}
