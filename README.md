# Ma To Do Liste

A to-do list is a list of items that need to be completed. The items on the list can range from simple activities like replying to an email, to more complex tasks like creating project briefs.


## Install Vite 

`npm create vite@latest` 
Select : 
-> nameProject 
-> React 
-> JavaScript + SWC

`cd nameProject `  

`npm install` 

Configuration VSCODE: 
Don't import react each time: 
crt schift P -> usersetting -> setting.json , edit : 
 "reactSnippets.settings.importReactOnTop": false, (false au lieu de true)

`rfc + tab` pour créer un composant 


## Install Tailwindcss (v. 3.4.3)

[Tailwindcss](https://tailwindcss.com/docs/guides/vite)

Docs -> Installation -> Framework Guides -> Vite (instructions)

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init -p`

`npm i -g postcss-cli`  (-g : general -> install the 1st time and update after)

- in the tailwindcss.config.js, add : 
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
```

- in the index.css file, add the directives : 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


For the syle of the form : 
Install plugin Tailwind forms : 
`npm i @tailwindcss/forms`

in tailwind.config.js, add: 
```
 plugins: [
    require('@tailwindcss/forms')
  ],
```

To generate the id, install nanoid
`npm i nanoid`


## Install plugin VSCode 

Install: Tailwind CSS IntelliSense


## Run 

`npm run dev`  

http://localhost:5173/


## Build 

`npm run build` 







