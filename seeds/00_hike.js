
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('hikes').insert([
        { name: "Coyote Song Trail Loop", location: "South Valley Park", terrain: "Foothills", elevation: 321 },
        { name: "Maxwell Falls Lower Trail", location: "Arapaho National Forest", terrain: "Woodland", elevation: 875 },
        { name: "Mount Galbraith Loop via Cedar Gulch Trail", location: "Mount Galbraith Park", terrain: "Foothills", elevation: 928 },
        { name: "Green Mountain and Hayden Trail Loop", location: "Green Mountain Open Space", terrain: "Foothills", elevation: 633 },
        { name: "Alderfer Three Sisters Trail", location: "Alderfer / Three Sisters Park", terrain: "Foothills", elevation: 1200 }
      ]);
    });
};
