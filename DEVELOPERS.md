# Welcome

## Structure
```
- data
- dist 
- src
    - lib
        - data
        - models 
        - utils
    - ui
* index.ts
```
* `dist` contains compiled javascript files
* `lib` contains all application logic
* `ui` contains all logic needed to render and interact with the program via the cli
* `index.ts` is the entry point to the application
* `data` contains all data used by the application //TODO this should probably be moved to a system dependent application file location

## Modules
* [chalk](https://www.npmjs.com/package/chalk) for terminal text coloring
* [figlet](https://www.npmjs.com/package/figlet) for ascii art
* [inquirer](https://www.npmjs.com/package/inquirer) for creating the user interface

## Conventions
* `PascalCase` for UI components
* `camelCase` for all other `.ts` files


## UI
* Clearing output should be done by the function calling the render function
* UI pages implement `Page`

## Data
* Contains all data used by the application
* One directory per job
    * One file per timesheet (monthly?) //TODO it seems logical to break these up but we could also just keep one large timesheet
