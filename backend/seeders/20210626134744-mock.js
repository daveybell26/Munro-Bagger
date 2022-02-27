const { mountains, users, routes, startPoints} = require('../mockData.json');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      users.map((user) => {
        const randomImage = Math.ceil(Math.random() * 1000);
        return {
          ...user,
          imageUrl: `https://picsum.photos/id/${randomImage}/200`,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
      {},
    );
    await queryInterface.bulkInsert(
      'Mountains',
      mountains.map((mountain) => {
        const randomImage = Math.ceil(Math.random() * 1000);
        return {
          id: mountain.id,
          name: mountain.name,
          imageUrl: `https://picsum.photos/id/${randomImage}/200`,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
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
      'Startpoints',
      startPoints.map((startPoint,i) => ({
        latitude: startPoint.latitude,
        longitude: startPoint.longitude,
        createdAt: new Date(),
        updatedAt: new Date(),
        MountainId:i+1
      })),
      {},
    );
    const pics = [];
    pics.length = 20000;
    pics.fill(0);
    await queryInterface.bulkInsert(
      'Pictures',
      pics.map(() => {
        const UserId = Math.ceil(users.length * Math.random());
        const MountainId = Math.ceil(mountains.length * Math.random());
        const randomDate = new Date(Math.floor(new Date() * Math.random()));
        const randomImage = Math.ceil(Math.random() * 1000);
        return {
          imageUrl: `https://picsum.photos/id/${randomImage}/200`,
          createdAt: randomDate,
          updatedAt: randomDate,
          UserId,
          MountainId,
        };
      }),
      {},
    );
    await queryInterface.bulkInsert(
      'Routes', routes.map((route) => ({
        ...route,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Mountains', null, {});
    await queryInterface.bulkDelete('Peaks', null, {});
    await queryInterface.bulkDelete('Pictures', null, {});
    await queryInterface.bulkDelete('Startpoints', null, {});
  },
};
