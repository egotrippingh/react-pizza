# React Pizza (Vite + React 19)

Небольшое SPA-приложение каталога пиццы на React. Главная страница отображает список пицц с загрузочными скелетонами, фильтрами по категориям и сортировкой. Данные загружаются с публичного mock API, навигация реализована через `react-router`.

## Стек и возможности

- **React 19** + **Vite** (роллап-билд `rolldown-vite@7.1.12`)
- **React Router v7** (`react-router`, `react-router-dom`)
- **Sass/SCSS** (через `sass-embedded`), модульные SCSS для компонентов
- **ESLint 9** c настройками для React и TypeScript
- **React Compiler** (плагин `babel-plugin-react-compiler` включён)
- **react-content-loader** для скелетонов (используется в `PizzaSkeleton`)

## Скрипты

```bash
# запуск дев-сервера
npm run start

# продакшн-сборка
npm run build

# предпросмотр продакшн-сборки
npm run preview

# линтинг
npm run lint
```

## Быстрый старт

```bash
git clone <repo-url>
cd reactpizzasite
npm ci            # или npm install
npm run start
```
Откройте `http://localhost:5173` (порт может отличаться в вашей среде).

## Структура проекта

```text
reactpizzasite/
  src/
    components/
      Header/        # шапка сайта (логотип + корзина)
      Logo/
      Cart/
      Categories/    # список категорий, локальное состояние активной вкладки
      Sort/          # выбор сортировки
      Pizza/         # карточка пиццы
      PizzaSkeleton/ # скелетон карточки при загрузке
    pages/
      Home.jsx       # главная: фильтры + список пицц
      CartPage.jsx   # заглушка страницы корзины
      NotFound.jsx   # 404
    App.jsx          # корневой компонент
    main.jsx         # точка входа, Router + App
```

## Навигация и маршрутизация

Входная точка `src/main.jsx` оборачивает приложение в `BrowserRouter`. В текущей версии основное содержимое рендерится непосредственно в `App.jsx` и `Home.jsx`. При необходимости можно добавить маршруты для страниц корзины и 404.

## Загрузка данных

`src/pages/Home.jsx` загружает список пицц c mock API:

```js
fetch("https://68e2aa938e14f4523dab802e.mockapi.io/items")
```

Пока данные загружаются, показываются элементы `PizzaSkeleton`. После получения данных отображаются карточки `Pizza`.

## Стили

Компоненты используют SCSS (`sass-embedded`). Файлы: `Header.scss`, `Categories.scss`, `Sort.scss`, `Pizza.scss` и глобальные `App.css`, `index.css`.

## Конфигурация TypeScript/ESLint

Хотя исходный код на JS/JSX, в проекте настроен TypeScript (`tsconfig.app.json`) и строгие правила линтинга. Это упрощает постепенный переход на TS при необходимости.

## Требования

- Node.js 18+ (рекомендуется актуальная LTS)
- npm 9+

## Полезные пути

- Точка входа: `src/main.jsx`
- Корневой компонент: `src/App.jsx`
- Главная страница: `src/pages/Home.jsx`
- Настройки Vite: `vite.config.ts`
- ESLint конфиг: `eslint.config.js`
