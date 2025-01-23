import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent {
  @Input({ required: true }) 
  course: Course;

  @Output('dataEmitter')
  courseSelected = new EventEmitter<Course>(); 

  onCourseClick(){
    console.log('Course card component clicked');
    this.courseSelected.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }
}
