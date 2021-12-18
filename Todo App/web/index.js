async function getTasks(){
    const tasks = await eel.get_tasks()()
    const divTasks = document.getElementById('tasks')
    divTasks.innerHTML = ''

    let taskDisplay = ''

    for (let task of tasks){
        taskDisplay += `<ul><li><p class="divs">&nbsp&nbsp${task}</p></li></ul>`
    }

    divTasks.innerHTML = taskDisplay
}

document.getElementById('addTaskBtn').addEventListener('click', async() => {
    await eel.add(document.getElementById('taskinp').value)
    getTasks();
})

document.getElementById('remTaskBtn').addEventListener('click', async() => {
    await eel.delete(document.getElementById('taskinp').value)
    getTasks();
})