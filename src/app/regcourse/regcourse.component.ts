import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-regcourse',
  templateUrl: '../regcourse/regcourse.component.html',
  styleUrls: ['../regcourse/regcourse.component.css']
})
export class RegCourseComponent implements OnInit{
  studentsdata;
  coursesdata;
  coursemap;
  stuID;
  courseregisteredarray = [];
  constructor(http: HttpClient) {
    let data = JSON.parse(window.localStorage.getItem("data"));
    console.log(data);
    this.studentsdata = data["studentsdata"];
    this.coursesdata = data["coursesdata"];
    this.coursemap = data["courseMap"];
    this.stuID = window.localStorage.getItem("stuID");
  }
  ngOnInit(){
    console.log(this.studentsdata[this.stuID]);
    for(let k=0;k<this.studentsdata[this.stuID].courses.length;k++){
      console.log(k);
      this.courseregisteredarray.push(this.coursemap[this.studentsdata[this.stuID].courses[k]]);
    }
    console.log(this.courseregisteredarray);

  }
}

