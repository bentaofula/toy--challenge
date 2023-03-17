// This function  prompts that a user to enter the mark a student and it displays the grade automatically
// grading criteria as A=80+, B=60+, C=50+, D=40+,E= below 40


const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
input.question("Enter Your mark!: ", function (mark){
    let studentmark = parseInt(mark, 10);
    if (isNaN(studentmark)){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
    }else{
        if (mark > 79) {
            process.stdout.write("A\n");  
        }else if (studentmark>60){
            process.stdout.write("B\n");
        }else if (studentmark>49){
            process.stdout.write("C\n");
        }else if (studentmark>40){
            process.stdout.write("D\n");
        }else {
            process.stdout.write("E\n");
        }
    }
      input.close (); 
    });
