
## Installation:
This requiere to install Docker locally in the machine.

Install proyect:
```bash
  yarn install
```

Deploy Database:
```bash
 docker-compose up --build
```


## Environment Variables

We need to setup each case created with Docker

`DB_DIALECT = postgres`

`DB_HOST = localhost`

`DB_PORT = 5432`

`DB_USERNAME = user` 

`DB_PASSWORD = password`

`DB_DATABASE = db` 

## All commands

| Command            | Action                                                   |
| :----------------- | :------------------------------------------------------- |
| `yarn install`     | Installs dependencies                                    |
| `yarn format`      | Parse all files into the desire practices                |
| `yarn populate`    | Fill the Database with values                            |
| `yarn dev`         | Starts local dev server at `localhost:3000`              |
| `yarn build`       | Build your production site to `./dist/`                  |
| `yarn preview`     | Preview your build locally, before deploying             |
| `yarn lint`        | Identifying and fixing problems sintaxs in .js/.ts files |
| `yarn test`        | Run only available tests.                                |
| `yarn coverage`    | Run the available tests and coverage.                    |
