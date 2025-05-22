import { db, collection, doc, setDoc, onSnapshot } from './firebase.js';

// Criar nova escala
export async function createSchedule(userId, scheduleData) {
  await setDoc(doc(db, "schedules", scheduleData.id), {
    ...scheduleData,
    userId,
    createdAt: new Date().toISOString()
  });
}

// Ouvir mudanças nas escalas
export function listenSchedules(userId, callback) {
  const q = query(collection(db, "schedules"), where("userId", "==", userId));
  return onSnapshot(q, (snapshot) => {
    const schedules = [];
    snapshot.forEach((doc) => schedules.push(doc.data()));
    callback(schedules);
  });
}