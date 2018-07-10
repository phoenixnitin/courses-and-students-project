import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent} from './courses/courses.component';
import { RegCourseComponent} from './regcourse/regcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    RegCourseComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
