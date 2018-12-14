import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {ManageStudentComponent} from '../../manage-student/manage-student.component';
import {ManageStudentDialogComponent} from '../../manage-student/manage-student-dialog'
import {ManageLecturerComponent} from '../../manage-lecturer/manage-lecturer.component';
import {ManageLecturerDialogComponent} from '../../manage-lecturer/manage-lecturer-dialog'
import {GradingComponent} from '../../grading/grading.component';
import {TranscriptComponent} from '../../transcript/transcript.component';
import {StudentService} from '../../student-services/student.service';
import {LecturerService} from '../../lecturer-services/lecturer-service.service';
import {HttpModule} from '@angular/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        ManageStudentComponent,
        ManageStudentDialogComponent,
        ManageLecturerComponent,
        ManageLecturerDialogComponent,
        GradingComponent,
        TranscriptComponent
    ],
    entryComponents: [
        ManageStudentDialogComponent,
        ManageLecturerDialogComponent
    ],
    providers: [
        StudentService,
        LecturerService,
        DatePipe
    ]
})

export class AdminLayoutModule {
}
