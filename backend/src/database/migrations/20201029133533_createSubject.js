exports.up = function(knex) {
  
    return knex.schema.createTable('subjects', function(table){

        table.increments();

        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('nota1');
        table.decimal('nota2');
        table.decimal('nota3');

        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('users');

    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('subjects');
};
