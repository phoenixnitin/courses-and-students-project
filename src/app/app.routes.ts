import {Routes, RouterModule} from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {CoursesComponent} from './courses/courses.component';
import {RegCourseComponent} from './regcourse/regcourse.component';

const APP_ROUTES: Routes=[
  {path:'courses', component: CoursesComponent},
  {path:'students', component: StudentsComponent},
  {path:'regcourse', component: RegCourseComponent},
];

export const routerModule = RouterModule.forRoot(APP_ROUTES);
