## CRUD запросы к БД PostgreSQL

:black_small_square:

#### Установка:
---
###### Скачиваем проект.
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
1. ```git clone https://github.com/rezervec/PostgreSQL_node-crud.git```
2. ```cd PostgreSQL_node-crud``` *(переходим в директорию с проектом)*
3. ```npm install```
---
###### Открываем Postgres в PowerShell.
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
1. ``` create database node_app_postgres; ``` *('node_app_postgres' - название БД)*
2. Редактируем файл проекта ```db.js```:
- password: *"ваш пароль от Postgres"*
- port: *"ваш порт Postgres"*
- database: *"имя созданной БД"*
3. В ```url.js``` выбираем порт, на котором будет открываться наше приложение.
4. ```npm run server```
---

:black_small_square:

#### Функционал:
- __CREATE__ – пишем **имя** и **фамилию** пользователя, которого нужно добавить.  
Запрос:
    - ```INSERT INTO person (name, surname) values ('Nicolas', 'Tesla');```

- __READ__ – пишем **id** пользователя, которого нужно найти.  
Запрос:
    - ```SELECT * FROM person where id = 1;```

- __UPDATE__ – пишем **id** старого и **имя**, **фамилию** нового пользователя.  
Запрос:
    - ```UPDATE person set name = 'Thomas', surname = 'Edison' where id = 1;```

- __DELETE__ – пишем **id** пользователя, которого хотим удалить.  
Запрос:
    - ```DELETE FROM person where id = 1;```