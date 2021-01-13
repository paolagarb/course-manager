import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '',
                price: 129.99,
                code: 'AS31-12',
                duration: 240,
                rating: 6.2,    
                releaseDate: 'December, 2, 2020'

            },
            {
                id: 2,
                name: 'HTML5',
                imageUrl: '',
                price: 29.99,
                code: 'HS42-10',
                duration: 120,
                rating: 7.0,
                releaseDate: 'November, 7, 2020'
            },
        ]
    }

}