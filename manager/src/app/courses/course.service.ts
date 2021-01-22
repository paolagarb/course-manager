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
        name: 'Introdução ao Angular 8',
        imageUrl: '/assets/images/Angular.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 2,
        name: 'C# Completo',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'UDEMY'
    },
    { 
        id: 3,
        name: 'Linguagem De Programação C# - Avançado',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 4,
        name: 'Linguagem De Programação C# - Básico',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 5,
        name: 'Primeiros passos com .NET + C#',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    {
        id: 6,
        name: 'JavaScript',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'Curso em Vídeo'
    },
    { 
        id: 7,
        name: 'Programação para internet com JavaScript',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 8,
        name: 'JavaScript: Conceitos e Bibliotecas',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 9,
        name: 'Construindo páginas para internet com Bootstrap',
        imageUrl: '/assets/images/Bootstrap.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 10,
        name: 'HTML - Avançado',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 11,
        name: 'HTML - Básico',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 12,
        name: 'HTML Web Developer',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 13,
        name: 'HTML5 - Introdução ao front-end',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 14,
        name: 'Introdução à Linguagem HTML',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'DiegoMariano'
    }, 
    { 
        id: 15,
        name: 'Programação para internet com HTML5 e CSS3',
        imageUrl: '/assets/images/HTMLeCSS.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 16,
        name: 'HTML e CSS na Prática',
        imageUrl: '/assets/images/HTMLeCSS.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 17,
        name: 'Introdução a criação de websites com HTML5 e CSS3',
        imageUrl: '/assets/images/HTMLeCSS.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 18,
        name: 'Design de Interfaces com CSS3',
        imageUrl: '/assets/images/CSS3.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 19,
        name: 'Implementando Banco de Dados',
        imageUrl: '/assets/images/SQL.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    }, 
    { 
        id: 20,
        name: 'Modelagem de Dados',
        imageUrl:  '',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 21,
        name: 'Introdução ao Uso de Banco de Dados SQL',
        imageUrl: '/assets/images/SQL.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 22,
        name: 'Introdução à Programação Orientada a Objetos (POO)',
        imageUrl:  '',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 23,
        name: 'Lógica de Programação Essencial',
        imageUrl:  '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 24,
        name: 'Conceitos de responsividade e experiência do usuário',
        imageUrl: '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 25,
        name: 'Competência Transversal - Lógica de Programação',
        imageUrl:  '',
        year: 2020,
        platform: 'SENAI'
    },
    { 
        id: 26,
        name: 'Introdução ao Git e Controle de Versões',
        imageUrl: '/assets/images/GIT.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 27,
        name: 'Criando um repositório para seus projetos inovadores',
        imageUrl:  '/assets/images/GIT.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 28,
        name: 'Introdução ao GitHub e comandos para trabalhar em equipe',
        imageUrl: '/assets/images/GitHub.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 29,
        name: 'Introdução ao Git e ao GitHub',
        imageUrl:  '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 30,
        name: 'Introdução à Linguagem de Progração PHP',
        imageUrl:  '',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 31,
        name: ' Introdução à Lei Brasileira de Proteção de Dados Pessoais',
        imageUrl:  '',
        year: 2020,
        platform: 'ENAP'
    },
    { 
        id: 32,
        name: 'Desvendando a Blockchain',
        imageUrl:  '',
        year: 2020,
        platform: 'SENAI'
    },
    { 
        id: 33,
        name: 'Suíte Criativa - Adobe XD',
        imageUrl: '/assets/images/AdobeXD.png',
        year: 2020,
        platform: 'Suíte Criativa'
    },
]