const { mountains, users } = require('../mockData.json');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      users.map((user) => ({
        ...user,
        imageUrl: 'https://picsum.photos/200',
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'Mountains',
      mountains.map((mountain) => ({
        name: mountain.name,
        imageUrl: 'https://picsum.photos/200',
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'Peaks',
      mountains.map((mountain, i) => ({
        latitude: mountain.coordinates[1],
        longitude: mountain.coordinates[0],
        elevation: mountain.coordinates[2],
        createdAt: new Date(),
        updatedAt: new Date(),
        MountainId: i + 1,
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'Pictures',
      mountains.map(() => {
        const UserId = Math.ceil(users.length * Math.random());
        const MountainId = Math.ceil(mountains.length * Math.random());
        return {
          imageUrl: 'https://picsum.photos/200',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId,
          MountainId,
        };
      }),
      {},
    );
    users.forEach((user, i) => {
      await queryInterface.bulkInsert(
        'Statuses',
        mountains.map((mountain, j) => ({
          wishlist: false,
          climbed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: i + 1,
          MountainId: j + 1,
        })),
        {},
      );
    });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Mountains', null, {});
    await queryInterface.bulkDelete('Peaks', null, {});
    await queryInterface.bulkDelete('Pictures', null, {});
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};
