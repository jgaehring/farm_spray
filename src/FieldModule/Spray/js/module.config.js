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
  filters: {
    log: {
      log_category(cat, i, cats) {
        const { tid } = cats.find(c => c.name === 'Spray');
        return cat.name === 'Spray' || cat.parents_all.some(parent => parent.id === tid);
      },
    },
  },
};
