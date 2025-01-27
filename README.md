Ru - Задача: Разработка вебсайта по парсингу информации о грантах
Общее описание задачи:
Разработка вебсайта, предназначенного для агрегации и предоставления 
(парсинг) информации о различных конкурсах и грантах. Целью данного 
проекта является обеспечение удобного и быстрого доступа пользователя к 
актуальным данным о предстоящих и текущих конкурсах и грантах.
Опыт реализации задачи
Полной реализацией задачи занимался 1 разработчик в разработке самих парсеров к сайтам. Срок реализации задачи 2 
месяца. Разаботка самих парсеров производилась с помощью языка 
программирования Python. Разработка пользовательского интерфейса 
(front-end) производилась с помощью HTML, CSS, Vue и Vuetify. Серверная 
часть (back-end) приложения разрабатывалась на языке программирования 
Golang. Также использовалась база данных PostgreSQL.
Требования к навыкам:
Знание языков программирования: Golang (или PHP, здесь язык на ваш 
выбор один из этих 2), HTML, CSS, Python, JavaScript, Vue и Vuetify. 
Умение работать с базами данных для хранения информации PostgreSQL 
(или аналогичная).
Функциональность
Вебсайт должен обладать следующей функциональностью:
1. Поиск информации: Пользователь должен иметь возможность задать 
запрос на поиск конкурсов и грантов по различным критериям проекта, 
таким как тематика и сроки подачи заявок
2. Детализация поиска: Благодаря фальтрам, пользователь может 
конкретизировать свой поисковый запрос или сделать ранжирование.
3. Отображение деталей: Пользователь может получить подробную 
информацию о конкретном конкурсе или гранте, включая условия участия, 
призы, требования и контактную информацию.
4. Возможность быстрого смещения в самый верх контента при длительном 
скролле страницы с информацией. Необходимо добавить кнопку для 
быстрого перемещения в самый верх страницы, чтобы пользователю не 
приходилось долго сроллить страницу в верх.
Интерфейс
Вебсайт должен обладать интуитивно понятным интерфейсом, который 
позволит пользователям легко взаимодействовать с ним. Основным 
интерфейсом является окно, в котором пользователи будут видеть список 
актуальных конкурсов в виде карточек и фильтр.
Пользователь должен иметь возможность производить фильтрацию 
конкурсов по следующим параметрам:
1. Стадия проекта
2. Регион участия
3. Направления проекта
4. Сумма гранта
5. Правовая форма грантополучателя (юридическое или физическое 
лицо)
6. Возраст участников
7. Отсекающие критерии (например: только для преподавателей 
университетов)
Аутентификация и безопасность
Для доступа к функциональности вебсайта не требуется аутентификация. 
Однако необходимо обеспечить безопасность пользовательских данных и 
конфиденциальность персональных запросов согласно 152 ФЗ Российской 
Федерации.
Требования к разработке
3.1. Технологический стек
Разработка вебсайта должна производиться с использованием следующих 
технологий:
● Язык программирования: Python, Golang
● Фреймворк для работы с API
● База данных для хранения информации о конкурсах и грантах: 
PostgreSQL (или аналогичная)
Архитектура
Предлагается использовать архитектуру "клиент-сервер", где API 
выступает в роли клиента, а серверная часть обеспечивает логику обработки 
запросов, взаимодействие с базой данных и внешними источниками 
данных.
Вебсайт должен иметь адаптивные версии для мобильной версии и 
планшета.
Требования к документации
К разработанному вебсайту требуется предоставить следующую 
документацию:
1. Описание функциональности: Подробное описание функций, 
которые предоставляет вебсайт, с указанием примеров использования.
2. Инструкция по установке: Построение окружения для разработки, 
установка необходимых зависимостей.
3. Руководство пользователя: Пошаговая инструкция по использованию 
вебсайта, включая примеры запросов и ожидаемые ответы.
5. Тестирование
Необходимо провести тестирование вебсайта на соответствие требованиям 
и наличие ошибок. Провести тестирование как функциональных, так и 
нефункциональных аспектов
Ожидаемый результат:
В результате должна быть адаптивная веб версия сайта, благодаря 
которому, пользователь будет иметь возможность подобрать для себя 
интересующую программу по развитию собственного стартапа по прямому 
поисковому запросу или подбору через фильтр. После выбранной 
программы пользователь должен иметь возможность провалиться в 
страницу о подробном описании условий гранта и возможности перейти на 
основной сайт программы
En - Task: Development of a website for parsing information about grants
General description of the task:
Development of a website designed to aggregate and provide
(parsing) information about various competitions and grants. The goal of this
project is to provide convenient and quick user access to
up-to-date data on upcoming and current competitions and grants.
Experience in implementing the task
The full implementation of the task was carried out by 1 developer in developing the parsers themselves for the sites. The task implementation period is 2
months. The development of the parsers themselves was carried out using the Python programming language. The development of the user interface
(front-end) was carried out using HTML, CSS, Vue and Vuetify. The server
part (back-end) of the application was developed in the Golang programming language. The PostgreSQL database was also used. Skill requirements:
Knowledge of programming languages: Golang (or PHP, here the language is your choice of one of these 2), HTML, CSS, Python, JavaScript, Vue and Vuetify.

Ability to work with databases for storing information PostgreSQL
(or similar).
Functionality
The website should have the following functionality:
1. Information search: The user should be able to set a
query to search for competitions and grants by various project criteria,
such as subject matter and application deadlines
2. Search detailing: Thanks to filter, the user can
specify their search query or make a ranking.
3. Displaying details: The user can get detailed
information about a specific competition or grant, including terms of participation,
prizes, requirements and contact information.
4. The ability to quickly move to the very top of the content during a long
scroll of the page with information. It is necessary to add a button for
quickly moving to the very top of the page, so that the user does not have to
scroll the page up for a long time.
Interface
The website should have an intuitive interface that will allow users to easily interact with it. The main
interface is a window in which users will see a list of
current competitions in the form of cards and a filter.
The user should be able to filter
competitions by the following parameters:
1. Project stage
2. Region of participation
3. Project areas
4. Grant amount
5. Legal form of the grant recipient (legal entity or
natural person)
6. Age of participants
7. Cut-off criteria (for example: only for
university teachers)
Authentication and security
No authentication is required to access the functionality of the website.
However, it is necessary to ensure the security of user data and
confidentiality of personal requests in accordance with Federal Law 152 of the Russian
Federation.
Development requirements
3.1. Tech stack
The website should be developed using the following

technologies:
● Programming language: Python, Golang
● Framework for working with API
● Database for storing information about competitions and grants:

PostgreSQL (or similar)
Architecture
It is proposed to use the "client-server" architecture, where the API

acts as a client, and the server part provides the logic for processing

requests, interaction with the database and external sources

of data.
The website should have adaptive versions for the mobile version and

tablet.
Documentation requirements
The following

documentation is required for the developed website:

1. Description of functionality: A detailed description of the functions

that the website provides, with examples of use.

2. Installation instructions: Building a development environment,

installing the necessary dependencies.
3. User Guide: Step-by-step instructions on how to use the
website, including sample queries and expected responses.
5. Testing
It is necessary to test the website for compliance with the requirements
and the presence of errors. Conduct testing of both functional and
non-functional aspects
Expected result:
The result should be an adaptive web version of the site, thanks to
which the user will be able to select for themselves
an interesting program for developing their own startup by direct
search query or selection through a filter. After the selected
program, the user should be able to fall into
a page with a detailed description of the grant conditions and the ability to go to
the main site of the program
![image](https://github.com/user-attachments/assets/5a0529a0-e96f-4937-8824-7ae737723a61)
![image](https://github.com/user-attachments/assets/a7768fca-5b82-41e1-86ad-fc99bb263f05)
![image](https://github.com/user-attachments/assets/33d15182-74d2-463e-844c-2768ed5b9397)
