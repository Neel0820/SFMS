import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { StudentService, Standard } from './student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterOutlet,StudentMenuComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private studentService:StudentService){
    this.studentService.selectedStandard.set({name:"All",id:"all"} as Standard)
  }
}