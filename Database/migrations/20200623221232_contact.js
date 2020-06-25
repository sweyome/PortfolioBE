const { table } = require("../dbconfig");

exports.up = function(knex) {
  return knex.schema
    .createTable('contact', tbl =>{
        tbl.increments("id");
        tbl.string('name', 128).notNullable();
        tbl.string('email', 128).notNullable();
        tbl.string('message',255).notNullable();
    })   

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contact')
};
