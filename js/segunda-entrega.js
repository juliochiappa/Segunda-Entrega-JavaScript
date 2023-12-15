
//Simulador Gestión de Pacientes (con turnos y especialidad) de un Centro de Estética


//Sección Pacientes

let pacienteId = 1;
let pacientes = [];

class Pacientes {
    constructor (nombre, apellido, documento, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this. documento = documento;
        this. mail = mail;
        this.id = pacienteId;
    }
}

const registrarPaciente = (paciente) => {
    pacientes.push(paciente);
    pacienteId++
};

const mostrarPaciente = () => {
    let nombresPacientes = pacientes.map( paciente => `Id: ${paciente.id} - Nombre: ${paciente.nombre} - Apellido: ${paciente.apellido} - DNI: ${paciente.documento} - Mail: ${paciente.mail}`);
    if (nombresPacientes.length > 0) {
        alert(nombresPacientes.join("\n"));
    } else {
        alert("No se encuentra ningún paciente registrado");
    }
};

const eliminarPaciente = (id) => {
    let existePaciente = pacientes.some(paciente => paciente.id === id);

    if (existePaciente) {
        pacientes = pacientes.filter(paciente => paciente.id !== id);
        alert("El paciente ha sido eliminado con éxito del sistema");
    }else {
        alert("No existe paciente registrado con el ID ingresado");
    }
};



//Sección Menú Pacientes

const menuPaciente = () => {
    let opcion = true;

    while (opcion) {
        let menuPacientes = parseInt(
            prompt(
            `
            ¡Menú Pacientes!

            1- Registrar paciente
            2- Mostrar paciente
            3- Eliminar paciente
            4- Volver menú principal         

            `
            )
        )
        switch (menuPacientes) {

            case 1:
                let nombre = prompt("Ingrese su nombre por favor");
                let apellido = prompt("Ingrese ahora su apellido");
                let documento = parseInt(prompt("Ingrese ahora su DNI (sin puntos)"));
                let mail = prompt("Ingrese ahora su mail");
                let paciente = new Pacientes(nombre, apellido, documento, mail);
                registrarPaciente (paciente);
                break;
            case 2:
                mostrarPaciente ();
                break;
            case 3:
                let idPaciente = parseInt(prompt("Debe ingresar el ID del paciente a eliminar"));
                eliminarPaciente (idPaciente);
                break;
            case 4:
                opcion = false;
                menuPrincipal();
                break;

            default:
                alert("Debe ingresar una opción válida (del 1 al 4)")
                break;
        }
    }
};

//Sección solicitud de turnos

const menuTurnos = () => {
    let diaTurno;
    diaTurno = parseInt(prompt("Por favor seleccione el día del turno: \n1. Lunes \n2. Martes \n3. Miércoles \n4. Jueves \n5. Viernes"));

    while (diaTurno < 1 || diaTurno > 5) {
        alert("Ha ingresado un valor incorrecto");
        diaTurno = parseInt(prompt("Debe ingresar un número en los valores consignados: \n1. Lunes \n2. Martes \n3. Miércoles \n4. Jueves \n5. Viernes"));
    }
    
    function turno (diaTurno) {
        alert(`El día del turno seleccionado es: ${diaTurno}`);
    }
    
    switch (diaTurno) {
        case 1:
            diaTurno = "Lunes";
            turno(diaTurno);
            break;
        case 2:
            diaTurno = "Martes";
            turno(diaTurno);
            break;
        case 3:
            diaTurno = "Miércoles";
            turno(diaTurno);
            break;
        case 4:
            diaTurno = "Jueves";
            turno(diaTurno);
            break;
        case 5:
            diaTurno = "Viernes";
            turno(diaTurno);
            break;
    }
};

//Sección solicitud de especialidad estética

const menuEspecialidad = () => {
    let especialidad; 
    especialidad = parseInt(prompt("Por favor seleccione la especialidad: \n1. Masajes \n2. Cavitación \n3. Máscara de LED \n4. Presoterapia"));

    while (especialidad < 1 || especialidad > 4) {
        alert("Ha ingresado un valor incorrecto");
        especialidad = parseInt(prompt("Debe ingresar un número en los valores consignados: \n1. Masajes \n2. Cavitación \n3. Máscara de LED \n4. Presoterapia"));
    }
    function especialidadEstetica(especialidad) {
        alert(`La especialidad seleccionada es: ${especialidad}`);
    }

    switch (especialidad) {
        case 1:
            especialidad = "Masajes";
            especialidadEstetica(especialidad);
            break;
        case 2:
            especialidad = "Cavitación";
            especialidadEstetica(especialidad);
            break;
        case 3:
            especialidad = "Máscara de LED";
            especialidadEstetica(especialidad);
            break;
        case 4:
            especialidad = "Presoterapia";
            especialidadEstetica(especialidad);
            break;
    }
};


//Sección Menú Principal 

let opcion = true;
const menuPrincipal = () => {
    
    while (opcion) {
        let menu = parseInt(
            prompt(
            `
            ¡CIEC le da la bienvenida!

            1- Registrarse como paciente
            2- Solicitar Turnos
            3- Seleccionar Especialidad
            4- Salir

            `
            )
        )
        switch (menu) {
            case 1:
                menuPaciente();
                break;

            case 2:
                menuTurnos();
                break;

            case 3:
                menuEspecialidad();
                break;

            case 4:
                opcion = false;
                break;

            default:
                alert("Debe ingresar una opción válida (del 1 al 4)");
                break;
        }
    }
};
menuPrincipal();
