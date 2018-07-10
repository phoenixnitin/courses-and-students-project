import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: '../courses/courses.component.html',
  styleUrls: ['../courses/courses.component.css']
})
export class CoursesComponent {
  coursesdata;
  constructor(http: HttpClient) {
    http.get('./assets/data.json').subscribe(res=>{console.log(res);
      this.coursesdata = res["data"].coursesdata;
    });
  }
}
