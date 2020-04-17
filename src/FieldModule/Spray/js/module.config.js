import SprayWidget from './components/SprayWidget';
import Spray from './components/Spray';
import SprayMenuBar from './components/SprayMenuBar';
import SprayLog from './components/SprayLog';
import SprayLogMenuBar from './components/SprayLogMenuBar';

export default {
  name: 'spray',
  label: 'Spraying',
  widget: SprayWidget,
  routes: [
    {
      name: 'spray',
      path: '/spray',
      components: {
        default: Spray,
        menubar: SprayMenuBar,
      },
    },
    {
      name: 'spray-log',
      path: '/spray/1',
      components: {
        default: SprayLog,
        menubar: SprayLogMenuBar,
      },
    },
  ],
};
