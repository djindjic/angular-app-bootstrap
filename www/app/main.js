import angular from 'angular';
import mainConfigModule from './config/main.config';
import route1Module from './routes/route1/route';
import route2Module from './routes/route2/route';
import headerMenu from './components/prHeaderMenu/directive';
import 'app/styles/main.css!';

export default
angular.
    module('angular-app-bootstrap', [
      mainConfigModule.name,
      route1Module.name,
      route2Module.name,
      headerMenu.name,
    ]);
