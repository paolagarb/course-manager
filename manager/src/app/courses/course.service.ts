import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable ({
    providedIn: 'root'
})

export class CourseService {
    retrieveAll() : Course[] {
        return COURSES;
    }

    retrieveById(id: number): Course {
        return COURSES.find((courseIterator: Course) => courseIterator.id == id);
    }

    save(course: Course):void{
        if (course.id) {
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id == course.id);
            COURSES[index] = course;
        }
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular',
        imageUrl: '/assets/images/Angular.png',
        price: 129.99,
        code: 'AS31-12',
        duration: 240,
        rating: 4.5,    
        releaseDate: 'December, 2, 2020',
        description: 'Curso de ANGULAR...'
    },
    {
        id: 2,
        name: 'HTML5',
        imageUrl: '/assets/images/HTML5.png',
        price: 29.99,
        code: 'HS42-10',
        duration: 120,
        rating: 4.0,
        releaseDate: 'November, 7, 2020',
        description: 'Curso de HTML5...'
    },
    {
        id: 3,
        name: 'CSS3',
        imageUrl: '/assets/images/CSS3.png',
        price: 39.99,
        code: 'CGE2-15',
        duration: 160,
        rating: 4.5,
        releaseDate: 'November, 2, 2020',
        description: 'Curso de CSS3...'
    },
    {
        id: 4,
        name: 'JavaScript',
        imageUrl: '/assets/images/JS.png',
        price: 69.99,
        code: 'JVN12-30',
        duration: 240,
        rating: 5.0,
        releaseDate: 'November, 11, 2020',
        description: 'Curso de JavaScript...'
    },
    {
        id: 5,
        name: 'C#',
        imageUrl: '/assets/images/Csharp.png',
        price: 29.99,
        code: 'HS42-10',
        duration: 600,
        rating: 5.0,
        releaseDate: 'November, 7, 2020',
        description: 'Curso de C#...'
    }
]