exports.up = function(knex) {

    return knex.schema.createTable('messages', function(table){

        table.increments();

        table.string('username').notNullable();
        table.string('email').notNullable();
        table.decimal('phone');
        table.decimal('message');

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('messages');
};
