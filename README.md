angular-app-bootstrap

# Installation

## Prerequisites

* Linux or MAC
* NodeJS, recommended 0.12.2 on NVM

### Linux only openjdk update required
```bash
sudo apt-get update
sudo apt-get install openjdk-7-jre
```

```bash
npm install -fg gulp jspm protractor karma-cli babel
git clone git@github.com:djindjic/angular-app-bootstrap.git
cd games angular-app-bootstrap
npm install && jspm install && webdriver-manager update
```

#Run
Run `gulp` command in repo root folder and open browser to point at `http//localhost:9000`.

#Karma tests

```bash
karma start
```
