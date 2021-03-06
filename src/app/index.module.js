import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';


angular.module('myapp2', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
              'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
