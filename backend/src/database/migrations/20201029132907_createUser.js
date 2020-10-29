exports.up = function(knex) {
  
    return knex.schema.createTable('users', function(table){

        table.string('id').primary();

        table.string('name').notNullable();
        table.string('pasword').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();

    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
