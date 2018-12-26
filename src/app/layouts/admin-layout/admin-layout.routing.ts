import {Routes} from '@angular/router';

import {GradingComponent} from '../../grading/grading.component';
import {TranscriptComponent} from '../../transcript/transcript.component';


export const AdminLayoutRoutes: Routes = [
    {path: 'grading', component: GradingComponent},
    {path: 'transcript', component: TranscriptComponent},
];
