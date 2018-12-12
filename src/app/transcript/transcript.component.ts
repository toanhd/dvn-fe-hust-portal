import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-transcript',
    templateUrl: './transcript.component.html',
    styleUrls: ['./transcript.component.scss']
})
export class TranscriptComponent implements OnInit {
    studentForm = new FormGroup({
        stdID: new FormControl(''),
    });

    constructor() {
    }

    ngOnInit() {
    }

    onSearching() {
        console.log(this.studentForm.value.stdID);
    }
}
