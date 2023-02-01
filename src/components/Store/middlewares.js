import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

const logger = createLogger();


const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export { middlewares };
