import readline from "readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const todos = [];

const showmenu = () => {
    console.log("1. ADD A TASK");
    console.log("2. VIEW TASKS");
    console.log("3. EXIT");
    rl.question("CHOOSE AN OPTION: ", handleInput)
}

const handleInput = (option) => {
    if(option == '1'){
        rl.question("Enter the task: ", (task) => {
            todos.push(task);
            console.log("Task added: ", task);
            showmenu();
        })
    }else if(option == '2'){
        console.log("Your Todo List");

        todos.forEach((task,index) => {
            console.log(`${index + 1}: ${task}`);
        });
        showmenu();
    }else if(option === '3'){
        console.log("God Bye");
        rl.close();
    }else{
        console.log("Invalid Option. Try Again");
        showmenu();
    }
}

showmenu()