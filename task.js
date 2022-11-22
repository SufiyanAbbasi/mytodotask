// show input 
const txt1 = document.getElementById('myInput');
const txt2 = document.getElementById('myTime');
const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("output1");
const out2 = document.getElementById("output2");
const out5 = document.getElementById("output-5");
const out6 = document.getElementById("output-6");
var id = 0;
var task = document.getElementById("demo");


var togfun = () => {
    var checkBox = document.getElementById("notog");

    if (checkBox.checked == false) {
        out5.innerHTML = txt1.value;
        out6.innerHTML = txt2.value;
    }
}

//adding  todos using javascript
var tasks = [];

function getInputValue() {


    document.getElementById("demo").style.display = "none";
    document.getElementById("mob").style.display = "block";



    const txt1 = document.getElementById('myInput');

    tasks.push({
        id: id++,
        name: txt1.value,
        time: txt2.value,
        today: true,
        completed: false,
    });

    this.displayTasks();
    console.log(tasks)

}

function displayTasks() {
    if (txt1.value.length == 0) {
        alert("Please Enter some data");
        return false;
    }

    this.tasks.map((task) => {
        // var listDiv = document.getElementById('textus');
        var text = document.getElementById("textus");
        text.innerHTML = '';
        this.tasks.map((task) => {
            var display = "block";
            if (this.show == false && task.completed == true) {
                display = 'none';
            }
            var code = `<section id="textus-${task.id}" style="display: ${display}">
        <div class="lorem" >
            <input type="checkbox" value="${task.id}" id="Checkme-${task.id}" `;
            if (task.completed == true) {
                code += 'checked="checked"';
            }
            code += `onclick="myFun3(${task.id})">
            <p id="text-${task.id}">` + task.name + `<br> </p>
        </div>
        <div class="small">
            <span id="output2">` + task.time + `</span>
        </div>
    </section>`;
            return text.innerHTML += code;
        })
    })





}



fun1 = () => {
    out1.innerHTML = txt1.value;
    out2.innerHTML = txt2.value;
}


btn1.addEventListener('click', fun1)




function myFunction() {
    document.getElementById("demo").style.display = "block";
    document.getElementById("mob").style.display = "none";
}


closeFun = () => {
    document.getElementById("demo").style.display = "none";
    document.getElementById("mob").style.display = "block";
}

//to go one step back




//To check uncheck the radio
function myFun3(id) {
    alert("are u sure you want to check the box");
    var checkBox = document.getElementById("Checkme-" + id);
    // var checkBoxId = checkBox.getAttribute('value');
    var text = document.getElementById("text-" + id);
    this.tasks.map((task) => {
        if (task.id == id) {
            return task.completed = !task.completed;
        }

    })
    console.log(this.tasks);
    if (checkBox.checked == true) {
        text.style.display = "block";
        text.style.textDecoration = "line-through"
        text.style.opacity = "0.4";
    } else {
        text.style.display = "block";
        text.style.opacity = "1";
        text.style.textDecoration = "none";
    }
}



// Hide Complete Function 
var show;

function dltfun() {
    this.show = !this.show;
    var hideText = document.getElementById('hideText');
    if (this.show == true) {
        hide.innerHTML = `<button id="hideText" onclick="dltfun()">
        Hide Completed
        </button>`;
    } else {
        hide.innerHTML = `<button id="hideText" onclick="dltfun()">Show Completed</button>`;
    }

    this.displayTasks();
}