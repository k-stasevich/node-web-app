'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          password: '$2b$10$6U.Dqb1VUPQ0sK1S3A5JBehhTzCudFhdIa5T2zFErXSvImCx2Wn2a', // pass=1234
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
