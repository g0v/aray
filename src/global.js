// import Amplify from 'aws-amplify';
import { Logger } from 'aws-amplify';

// Amplify.Logger.LOG_LEVEL = 'INFO';

const logLevel = process.env.NODE_ENV === 'development' ? 'DEBUG' : 'ERROR';
const logger = new Logger('ARAY', logLevel);

global.logger = logger;

// Disable warning message
console.disableYellowBox = true; /* eslint-disable-line no-console */
console.ignoredYellowBox = ['Setting a timer']; /* eslint-disable-line no-console */
