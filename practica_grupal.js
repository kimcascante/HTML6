// Función para mostrar los datos del formulario
function previewData() {
    const nombre = document.getElementById('Nombre').value;
    const apellido = document.getElementById('Apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('Telefono').value;
    const fecha = document.getElementById('Fecha').value;
    const participacion = document.querySelector('input[name="participacion"]:checked')?.value || 'No seleccionado';
    const intereses = Array.from(document.querySelectorAll('input[name="interes"]:checked')).map(el => el.value).join(', ');
    const bio = document.getElementById('bio').value;
 
    console.log(`Nombre: ${nombre} ${apellido}`);
    console.log(`Correo: ${email}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Participación: ${participacion}`);
    console.log(`Intereses: ${intereses}`);
    console.log(`Biografía: ${bio}`);
}
 
// Evento para enviar el formulario
document.getElementById('Registro').addEventListener('submit', function(event) {
    event.preventDefault();
    previewData();
});
 
// Evento para limpiar el formulario
document.getElementById('Registro').addEventListener('reset', function() {
    const inputs = document.querySelectorAll('#Registro input[type="text"], #Registro input[type="email"], #Registro input[type="tel"], #Registro input[type="date"], #Registro textarea');
    inputs.forEach(input => input.value = '');
    document.querySelectorAll('#Registro input[type="checkbox"], #Registro input[type="radio"]').forEach(input => input.checked = false);
});