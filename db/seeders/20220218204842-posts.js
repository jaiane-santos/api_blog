'use strict';

const postFactory = require('../factories/postFactory');

module.exports = {
  async up (queryInterface, Sequelize) {

    const posts = postFactory(50)
    await queryInterface.bulkInsert('posts', posts, {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
