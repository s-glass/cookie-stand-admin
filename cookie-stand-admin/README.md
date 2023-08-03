# Lab - Class 37

## Project: cookie-stand-admin

- Author: Sarah Glass for Python 401

- Collaborated with Anthony, Dan, Jared, and Andrew at a Remo table.

## Overview

- React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

- One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

- Your job is to create a Cookie Stand Admin app using Next.js and style using [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs).


## Feature Tasks and Requirements

- The spec for lab is screen shot of [Cookie Stand Admin Version 1](https://codefellows.github.io/code-401-python-guide/curriculum/class-37/lab/cookie-stand-admin-version-1.png)

- pages/Index.js should…
- Have `<Head>` component with page title set to Cookie Stand Admin
- Have a `<header>` component that matches spec.
- Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
- Have a `<footer>` component that matches spec.
- Style app using TailwindCSS utility classes.

## Links and Resources

- class notes and rewatching video
- screenshot image of the spec
- TA and peer help

## Setup

- no venv needed

## How to initialize/run your application

- clone repo
- make sure brew is up to date: `brew upgrade` and `brew update`
- make sure installs are up to date: `npm install`
- `npm run dev`
- runs at `localhost:3000`

## Libraries / Requirements

- tailwindcss

## Tests

- no testing yet

----------------------------------------------

# Lab - Class 38

## Project: cookie-stand-admin

- Author: Sarah Glass for Python 401

- Collaborated with Anthony, Dan, Logan, Slava, and Andrew at a Remo table.

## Overview

- Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.


## Feature Tasks and Requirements

- The specs for lab are screen shots Cookie Stand Admin Version 2 and Cookie Stand Admin No Stands
- pages/Index.js should return top level component `<CookieStandAdmin>`
- `<CookieStandAdmin>` details: will contain the following components:
`<Head>`, `<Header>`, `<main>`, `<CreateForm>`, `<ReportTable>`, and `<Footer>` component that matches spec."
- Import time slot data from supplied data.js file.
- `<CreateForm>` component details: object should have hourly_sales property with hard coded [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
- `<ReportTable>` details:  if reports is empty then render "`<h2>`No Cookie Stands Available`</h2>` ; If reports is not empty then render a table with thead,tbody and tfoot components.
- Components should render to match spec.
- Style all components using TailwindCSS utility classes to match spec.

## Links and Resources

- class notes and rewatching video
- screenshot image of the specs
- TA and peer help

## Setup

- no venv needed

## How to initialize/run your application

- clone repo
- make sure brew is up to date: `brew upgrade` and `brew update`
- make sure installs are up to date: `npm install`
- run server at `npm run dev`
- page runs at `localhost:3000`

## Libraries / Requirements

- tailwindcss

## Tests

- no testing yet