import app from './app.js';
import env from './config/env.js';
import logger from './logs/logger.js';
import {sequelize} from './database/database.js';
import './models/person.js';
import './models/education.js';
import {seedDatabase} from './seeders/seed.js';

async function main() {
  try {
    await sequelize.sync();
    await seedDatabase();
    const port = env.port;
    app.listen(port, () => {
      logger.info('Server on port ' + port);
    });
  } catch (error) {
    logger.error('Error starting server:', error);
  }
}

main();
