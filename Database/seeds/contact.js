
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert([
        {name: 'sent', email: 'rowValue1@gmail.com', message:'blablabalkabaka'},
        {name: 'tedo', email: 'rowValue2@yaho.com', message:'blablabalkabaka'},
        {name: 'wede', email: 'rowValue3@gamil.com', message:'blablabalkabaka'}
      ]);
    });
};
