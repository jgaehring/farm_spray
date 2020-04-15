import Spray from './components/Spray';
import SprayMenuBar from './components/SprayMenuBar';
import SprayWidget from './components/SprayWidget';

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
  ],
};
