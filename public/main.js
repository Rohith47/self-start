/**
 * Created by Rohith R on 08-10-2017.
 */

var form = document.getElementById('task_form');
var update = document.getElementById('update');
var deleteItem = document.getElementById('delete');

update.addEventListener('click', function (e) {
    e.preventDefault();
    var selctedID = document.getElementById('task_list').value;
    var updatedName = document.getElementById('name').value;
    // Send PUT Request here
    fetch('tasks/'+selctedID, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'taskId':selctedID,
            'name': updatedName
        })
    }).then(function(res){
        if(res.ok){ return res.json()}
    }).then(function(data){
        alert("Task Updated Successfully");
        window.location.reload(true)
    })
})

deleteItem.addEventListener('click', function (e) {
    e.preventDefault();
    var selctedID = document.getElementById('task_list').value;
    var deletingName = document.getElementById('task_list').options[document.getElementById('task_list').selectedIndex].text;
    // Send PUT Request here
    fetch('tasks/'+selctedID, {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'taskId':selctedID,
            'name': deletingName
        })
    }).then(function(res){
        if(res.ok){ return res.json()}
    }).then(function(data){
        alert("Task deleted Successfully");
        window.location.reload(true)
    })
})
