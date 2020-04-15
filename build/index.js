import app from 'farmos-client/src/core/app';
import logs from 'farmos-client/src/field-modules/my-logs/module.config';
import spray from '../src/FieldModule/Spray/js/module.config';

app('#app', [logs, spray]);
