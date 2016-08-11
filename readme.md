# shri-msk-2016-infrastructure

[![Build Status](https://travis-ci.org/azat-io/shri-msk-2016-infrastructure.svg?branch=master)](https://travis-ci.org/azat-io/shri-msk-2016-infrastructure)
[![bitHound Overall Score](https://www.bithound.io/github/azat-io/shri-msk-2016-infrastructure/badges/score.svg)](https://www.bithound.io/github/azat-io/shri-msk-2016-infrastructure)

Запилил простое приложение, реализующее подсчёт площадей различных геометрических фигур.

Развернуть приложение на локальном хосте:
```
$ git clone git@github.com:azat-io/shri-msk-2016-infrastructure.git
$ cd shri-msk-2016-infrastructure
$ npm install
$ npm run start
```

`→ localhost:3000`

Приложение выводит логи, отображающие затраченное время на рендеринг веб-страницы.

Настроил линтеры: ESLint для проверки JavaScript кода и StyleLint для проверки CSS. Я решил не изобретать простой велосипед и использовать готовые конфиги для линтеров, которые использую практически во всех своих проектах: `eslint-config-standard` и `stylelint-config-standard`. В дополнение к линтерам также установил `pre-commit`, который не позволяет отправлять коммиты в репозиторий, пока не сработают успешно линтеры.

Для параллельного запуска двух линтеров используется `npm-run-all`. Также, кроме всего этого линтеры, в соответствии с заданием, используются в команде `npm test` в дополнение к юнит-тестам.

![screenshot 2016-08-11 03 24 34](https://cloud.githubusercontent.com/assets/5698350/17575589/3186ef48-5f73-11e6-9733-4609b1315c44.png)

Прикрутил Travis CI. Настроил деплой ветки master репозитория в Heroku. Полёт нормальный.

При отправке пулл-реквестов автоматически прогоняются юнит-тесты.

Настроил хостинг на Heroku. Разобрался с логами сервиса. Логи содержат информацию о состоянии приложения и о том, какие запросы оно получает.

Настроил облачный линтер BitHound. :smiley:

Также добавил интеграцию веб-приложения с сервисом мониторинга состояния сервера UpTime Robot.

![screenshot 2016-08-11 03 50 28](https://cloud.githubusercontent.com/assets/5698350/17575964/df2eac3c-5f76-11e6-868f-54346eaddf96.png)

Для написания тестов использовал набирающий популярность тест раннер [AVA](https://www.npmjs.com/package/ava).

Написал 4 теста, по одному для каждой геометрический фигуры, используемой в приложении.

:bowtie:
