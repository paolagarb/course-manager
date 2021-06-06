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
        id: 54,
        name: 'User Experience',
        imageUrl: '',
        year: 2021,
        platform: 'FIAP'
    },
    { 
        id: 53,
        name: 'Python',
        imageUrl: '/assets/images/Python.png',
        year: 2021,
        platform: 'FIAP'
    },
    { 
        id: 52,
        name: 'Bootcamp .NET Fundamentals',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
     { 
        id: 51,
        name: 'Bootcamp MRV .NET Developer',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 50,
        name: 'Bootcamp localizaLabs .NET Developer',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 49,
        name: 'Introdução à Biblioteca jQuery',
        imageUrl: '/assets/images/jQuery.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 48,
        name: 'Estratégia de Negócios com OKR',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 47,
        name: 'Aplicando Design Patterns na Prática com C#',
        imageUrl: '/assets/images/Csharp.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 46,
        name: 'Desenvolvendo sua aplicação com C# usando DDD',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 45,
        name: 'Fundamentos para a Criação de Produtos Digitais',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 44,
        name: 'Modelagem de Negócios',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 43,
        name: 'Configuração da arquitetura back-end com .NET Core',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 42,
        name: 'Arquitetura de Sistemas Avançado',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    }, 
    { 
        id: 41,
        name: 'Introdução ao Angular 8',
        imageUrl: '/assets/images/Angular.png',
        year: 2021,
        platform: 'Digital Innovation One'
    }, 
    { 
        id: 40,
        name: 'Introdução a orquestração de contêineres com Docker',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    }, 
    { 
        id: 39,
        name: 'Orientação a objetos em .NET (Bootcamp)',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 38,
        name: 'Desenvolvimento de Aplicações com .NET',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 37,
        name: 'SQL Server (Bootcamp)',
        imageUrl: '/assets/images/SQL.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 36,
        name: 'Desenvolvimento avançado com JavaScript',
        imageUrl: '/assets/images/JS.png',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 35,
        name: 'Introdução ao SCRUM',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 34,
        name: 'Estrutura de Dados e Algoritmos (Bootcamp DIO)',
        imageUrl: '',
        year: 2021,
        platform: 'Digital Innovation One'
    },
    { 
        id: 33,
        name: 'C# Completo',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'UDEMY'
    },
    { 
        id: 32,
        name: 'Linguagem De Programação C# - Avançado',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 31,
        name: 'Linguagem De Programação C# - Básico',
        imageUrl: '/assets/images/Csharp.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 30,
        name: 'Primeiros passos com .NET + C#',
        imageUrl: '/assets/images/DOTNET.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 29,
        name: 'Desenvolvimento Web',
        imageUrl: '',
        year: 2020,
        platform: 'Via Rápida'
    },
    {
        id: 28,
        name: 'JavaScript',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'Curso em Vídeo'
    },
    { 
        id: 27,
        name: 'Programação para internet com JavaScript',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 26,
        name: 'JavaScript: Conceitos e Bibliotecas',
        imageUrl: '/assets/images/JS.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 25,
        name: 'Construindo páginas para internet com Bootstrap',
        imageUrl: '/assets/images/Bootstrap.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 24,
        name: 'HTML - Avançado',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 23,
        name: 'HTML - Básico',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 22,
        name: 'HTML Web Developer',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 21,
        name: 'HTML5 - Introdução ao front-end',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 20,
        name: 'Introdução à Linguagem HTML',
        imageUrl: '/assets/images/HTML5.png',
        year: 2020,
        platform: 'DiegoMariano'
    }, 
    { 
        id: 19,
        name: 'Programação para internet com HTML5 e CSS3',
        imageUrl: '/assets/images/HTMLeCSS.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 18,
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
        id: 16,
        name: 'Design de Interfaces com CSS3',
        imageUrl: '/assets/images/CSS3.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 15,
        name: 'Implementando Banco de Dados',
        imageUrl: '/assets/images/SQL.png',
        year: 2020,
        platform: 'Fundação Bradesco'
    }, 
    { 
        id: 14,
        name: 'Modelagem de Dados',
        imageUrl:  '',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 13,
        name: 'Introdução ao Uso de Banco de Dados SQL',
        imageUrl: '/assets/images/SQL.png',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 12,
        name: 'Introdução à Programação Orientada a Objetos (POO)',
        imageUrl:  '',
        year: 2020,
        platform: 'Fundação Bradesco'
    },
    { 
        id: 11,
        name: 'Lógica de Programação Essencial',
        imageUrl:  '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 10,
        name: 'Conceitos de responsividade e experiência do usuário',
        imageUrl: '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 9,
        name: 'Competência Transversal - Lógica de Programação',
        imageUrl:  '',
        year: 2020,
        platform: 'SENAI'
    },
    { 
        id: 8,
        name: 'Introdução ao Git e Controle de Versões',
        imageUrl: '/assets/images/GIT.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 7,
        name: 'Criando um repositório para seus projetos inovadores',
        imageUrl:  '/assets/images/GIT.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 6,
        name: 'Introdução ao GitHub e comandos para trabalhar em equipe',
        imageUrl: '/assets/images/GitHub.png',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 5,
        name: 'Introdução ao Git e ao GitHub',
        imageUrl:  '',
        year: 2020,
        platform: 'Digital Innovation One'
    },
    { 
        id: 4,
        name: 'Introdução à Linguagem de Progração PHP',
        imageUrl:  '',
        year: 2020,
        platform: 'TimTec'
    },
    { 
        id: 3,
        name: 'Introdução à Lei Brasileira de Proteção de Dados Pessoais',
        imageUrl:  '',
        year: 2020,
        platform: 'ENAP'
    },
    { 
        id: 2,
        name: 'Desvendando a Blockchain',
        imageUrl:  '',
        year: 2020,
        platform: 'SENAI'
    },
    { 
        id: 1,
        name: 'Suíte Criativa - Adobe XD',
        imageUrl: '/assets/images/AdobeXD.png',
        year: 2020,
        platform: 'Suíte Criativa'
    },
]