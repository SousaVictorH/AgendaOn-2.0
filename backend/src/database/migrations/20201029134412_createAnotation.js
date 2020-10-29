exports.up = function(knex) {

    return knex.schema.createTable('anotations', function(table){

        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('date').notNullable();

        table.string('subject_id').notNullable();
        table.foreign('subject_id').references('id').inTable('subjects');

    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('anotations');
};
