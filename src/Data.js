const data = [
    {
        theme: "React",
        imgOfTheme: "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
        questions: [
            {
                question: "Какво е React.js?",
                answers: ["Програмна рамка използваща програмен език java.", "Framework на javascript.",
                    "Библиотека за писане на сървърен код с javascript.", "Програмна рамка използваща програмен език javascript."
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "Кой React hook описва функция, която се изпълнява веднага след зареждането на компонента в който се намира?",
                answers: ["useState", "useParams",
                    "useEffect", "useCallBack"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Как е правилният начин да се опише атрибута за клас на всички тагове при React.js?",
                answers: ["class-name", "class",
                    "name-class", "className"
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "Как се нарича React библиотека, която се използва за писане на мобилни хибридни приложения?",
                type: "open",
                answer: "React Native",
                image: null
            },
            {
                question: "Характерен код за коя React библиотека е изобразен на снимката",
                answers: ["React Routes", "React Native",
                    "Next", "JQuery"
                ],
                correct: 1,
                type: "closed",
                answer: "React Native",
                image: "https://miro.medium.com/v2/resize:fit:637/1*PE0hLBU60TVDJbEETJoplw.png"
            },
            {
                question: "Какво е JSX?",
                answers: ["Java + Secure + XML", "Java + Spring + XStream",
                    "JavaScript + XML", "JavaScript + Secure + Jquery"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Коя известна компания е създала React.js ?",
                answers: ["Google", "Microsoft",
                    "Apple", "Facebook"
                ],
                correct: 4,
                type: "closed",
                image: null
            }
        ]
    },
    {
        theme: "Javascript",
        imgOfTheme: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        questions: [
            {
                question: "Коя ключова дума не съществува в Javascript?",
                answers: ["var", "function",
                    "ref", "extends"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Каква е основната цел на Javascript?",
                answers: ["Да изгражда структурата на уеб сайт", "Да изгражда интерактивност на уеб сайтове",
                    "Да добавя анимации в уеб сайт", "Да изгражда стилизилането на уеб сайт"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "Чрез коя ключова дума не може да се декларира променлива в Javascript?",
                answers: ["var", "let",
                    "final", "const"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Кое не е вярно за езика Javascript?",
                answers: ["Javascript е синхронен език и за да се направи асинхронен, трябва да се използват програмни нишки.", "Javascript не е строго типизиран.",
                    "Javascript е обектно ориентиран език.", "С помощта на Node.js чрез Javascript може да се правят full stack applications."
                ],
                correct: 1,
                type: "closed",
                image: null
            },
            {
                question: "Коя ключова дума се използва за деклариране на променлива, чиято стойност не може да бъде променена?",
                type: "open",
                answer: "const",
                image: null
            },
            {
                question: "Кое е най-подходящото нещо за синхронизиране на Javascript код?",
                answers: ["Call back function", "Event loop",
                    "SetInterval/SetTimeout", "Promise"
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "Какъв тип данни е променливата example: let example = {exist: true}",
                answers: ["boolean", "object",
                    "JSON", "string"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "Какво ще се изведе на конзолата след изпълнението на следната функция: function myFunction() { console.log(number); var number = 18;",
                type: "open",
                answer: "18",
                image: null
            },
            {
                question: "Колко конструктора може да има един Javascript клас?",
                answers: ["1", "1234",
                    "Безкрайно много", "При Javascript класовете няма конструктори."
                ],
                correct: 1,
                type: "closed",
                image: null
            },
            {
                question: "Коя Javascript ключова дума се използва за наследяване на клас",
                type: "open",
                answer: "extends",
                image: null
            }
        ]
    },
    {
        theme: "Chalga",
        imgOfTheme: "https://i.id24.bg/i/1472912.jpg",
        questions: [
            {
                question: "Къде е родена Галена?",
                answers: ["Копривщица", "Ловеч",
                    "Смядово", "Старосел"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Какво е името на първият албум на Емилия, който излиза през 2001г. ? ",
                answers: ["„Ангел в нощта”", "„Весело момиче”",
                    "„Нежни устни”", "„Самотна стая”"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "Какво е истинското име на Галена?",
                answers: ["Глория", "Галина",
                    "Гергана", "Гинка"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "От кой албум на Преслава е песента „Нищо друго“?",
                answers: ["„Интрига“", "„Не съм ангел“",
                    "„Пази се от приятелки”", "„Да гори в любов”"
                ],
                correct: 1,
                type: "closed",
                image: null
            },
            {
                question: "През коя година е издадена песента „Дяволско желание“ на Преслава?",
                answers: ["2005", "2006",
                    "2007", "2008"
                ],
                correct: 1,
                type: "closed",
                image: null
            },
            {
                question: "Как е истинското име на Емануела ? ",
                answers: ["Елеонора", "Елвира",
                    "Елена", "Емилия"
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "Името на коя от следните певици НЕ е артистичен псевдоним, а е нейното истинско? ",
                answers: ["Галена", "Преслава",
                    "Андрея", "Емилия"
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "През коя година Анелия получава грамота от Националната гвардия, връчена лично от генерал Боян Ставрев? ",
                answers: ["2009", "2015",
                    "2010", "2016"
                ],
                correct: 4,
                type: "closed",
                image: null
            },
            {
                question: "Как се казва албумът на Теди Александрова, издаден през 2021г. ?",
                answers: ["„Теди Александрова”", "„Ня'а проблем”",
                    "„Сърце мое”", "няма издаден албум"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "С кого си партнира Галена в песента „Красиви лъжи”?",
                answers: ["Азис", "Криско",
                    "Галин", "Фики"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "През коя година излиза песента „Кой” на Галена и Фики? ",
                answers: ["2016", "2013",
                    "2014", "2015"
                ],
                correct: 2,
                type: "closed",
                image: null
            },
            {
                question: "Какво държи Преслава в песента си „Улицата”?",
                answers: ["малко кученце", "малко котенце ",
                    "букет лалета ", "плюшено мече"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "На какво е равно А+Г според Галена и Азис? ",
                answers: ["ВНЛ", "22",
                    "ВНП", "3.14"
                ],
                correct: 1,
                type: "closed",
                image: null
            },
            {
                question: "Кои двама певци изпълняват песента „Скандал”?",
                answers: ["Азис и Галена", "Преслава и Галин",
                    "Галена и Меди", "Галена и Емрах"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "На кого се прави Устата в песента „Скъпи купи ми нещо с Глория”?",
                answers: ["Лепа Брена", "Лили Иванова ",
                    "Ричард Гиър", "Версаче"
                ],
                correct: 3,
                type: "closed",
                image: null
            },
            {
                question: "Как се казва племенницата на Галена?",
                type: "open",
                answer: "Доника",
                image: null
            },
            {
                question: "Как се казва изобразената на снимката певица?",
                type: "open",
                answer: "Сузанита",
                image: "https://i.id24.bg/i/919783.jpg"
            },
            {
                question: 'Довършете следната песен на певицата Алисия - "Как уцели ми кажи, залитнах ли?" ',
                type: "open",
                answer: "Как да кажа не личи хареса ми",
                image: null
            },
            {
                question: "От коя песен е дадената снимка?",
                answers: ["Мама ураган", "Пантера",
                    "Еуфория", "Паника"
                ],
                correct: 2,
                type: "closed",
                image: "https://i.ytimg.com/vi/vui3DBEApEs/maxresdefault.jpg"
            },
            {
                question: "Кои са трите изпълнителки в песента " + `"Излъжи ме"?`,
                type: "open",
                answer: "Десита Лидия Диона",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1SQzm-XZtNfKVo30vR3azD3zhlhfRt9ajA&usqp=CAU"
            }
        ]
    }
];

export default data;