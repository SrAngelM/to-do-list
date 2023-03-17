//Creacion de las variables para aniadir tareas, contenedor de las tareas y el input para escribir las tareas pendientes.

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//Eventos, empezamos con aniadir tareas
addTask.addEventListener("click", () => {
  //Creo la variable en donde se guardara la tarea que enviare al grupo de tareas luego le aniado una clase de nombre 'task'
  let task = document.createElement("div");
  task.classList.add("task");

  //Creo un item de lista para almacenar el valor ingresado al input para ponerlo dentro de la tarea.
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  //Creo el boton de tarea lista y lo aniado al grupo dentro de la tarea, servira para saber si la tarea esta realizada o no
  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  //Creo el boton de borrado de la tarea
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  //Validamos que cuando seleccionamos al enviar tarea, si el input esta vacio enviamos una alerta avisando que nose ingreso nada, en caso contrario si se lleno, este se enviara al grupo de tareas pendientes.
  inputTask.value === ""
    ? alert("Please enter a task!")
    : taskContainer.appendChild(task);
  inputTask.value = "";

  //Creamos el evento de tarea lista, el cual servira para marcar la tarea lista
  checkButton.addEventListener("click", () => {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  //Creo el boton de borrado de la tarea, el cual eliminara la tarea el cual este puntuando el usuario a traves del objeto evento.
  deleteButton.addEventListener("click", (e) => {
    let target = e.target;

    //Validamos de que si la tarea para eliminar no esta seleccionada dentro del grupo que contiene las diferentes tareas, esto sirve para evitar que todas las tareas se borren y evitar errores, caso contrario se borrara normalmente.
    if (target.parentElement.parentElement == taskContainer) {
      target.parentElement.remove();
    } else {
      target.parentElement.parentElement.remove();
    }
  });
});
