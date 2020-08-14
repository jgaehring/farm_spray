import app from 'farmos-client/src/core/app';
import logs from 'farmos-client/src/field-modules/my-logs/module';
import spray from '../src/FieldModule/Spray/js/module';

app('#app', [logs, spray]);
