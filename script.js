const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const form = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorDiv.textContent = '';
  const email = form.email.value.trim();
  const password = form.password.value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("Login successful!");
    // Optional redirect: window.location.href = "/dashboard.html";
  } catch (err) {
    errorDiv.textContent = err.message;
  }
});
