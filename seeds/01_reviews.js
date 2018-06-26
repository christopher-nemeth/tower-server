
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { name: "Coyote Song Trail Loop", difficulty: 3, rating: 6, comment: "" },
        { name: "Maxwell Falls Lower Trail", difficulty: 5, rating: 5, comment: "" },
        { name: "Mount Galbraith Loop via Cedar Gulch Trail", difficulty: 6, rating: 7, comment: "" },
        { name: "Green Mountain and Hayden Trail Loop", difficulty: 4, rating: 7, comment: "" },
        { name: "Alderfer Three Sisters Trail", difficulty: 3, rating: 6, comment: "" },
      ]);
    });
};
