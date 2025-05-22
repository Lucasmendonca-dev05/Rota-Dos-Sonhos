import { 
  auth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
} from './firebase.js';

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'dashboard.html';
  } catch (error) {
    alert('Erro no login: ' + error.message);
  }
});

// Registro (similar ao login)