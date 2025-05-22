// Inicialização do calendário
const calendarEl = document.getElementById('calendar');
let currentMonth = new Date().getMonth();

function renderCalendar() {
  // Lógica para renderizar os dias do mês
  // Integração com os dados do Firestore
}

// Ouvir mudanças no Firestore
listenSchedules(auth.currentUser.uid, (schedules) => {
  renderCalendar();
  updateScheduleList(schedules);
});