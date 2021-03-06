/**
 * Created by Rohith R on 17-09-2017.
 */
'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks')
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/')
        .get(todoList.list_all_tasks);
};