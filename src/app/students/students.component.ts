import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  templateUrl: '../students/students.component.html',
  styleUrls: ['../students/students.component.css']
})
export class StudentsComponent {
  studentsdata;
  constructor(http: HttpClient) {
    http.get('./assets/data.json').subscribe(res=>{console.log(res);
      this.studentsdata = res["data"].studentsdata;
      window.localStorage.setItem("data", JSON.stringify(res["data"]));
    });
  }

  collectdata(index, name, rollno, courses){
    console.log(courses);
    window.localStorage.setItem("stuID", index);
    window.location.pathname="/regcourse";
  }
}
