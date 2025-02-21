// Initialize Supabase
const SUPABASE_URL = "https://xwtwdfysnretubvxzyxf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dHdkZnlzbnJldHVidnh6eXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NTQ2OTAsImV4cCI6MjA1NTMzMDY5MH0.17BQxUJONl733T3A7IcxAqrdr1XX93GIvFD-fTiDaKI";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener("DOMContentLoaded", () => {
    function handleEnterKey(event, callback) {
        if (event.key === "Enter") {
            event.preventDefault();
            callback();
        }
    }

    async function login() {
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;
        if (!email || !password) return;

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (!error) window.location.href = "main.html";
    }

    async function signup() {
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;
        if (!email || !password) return;

        const { error } = await supabase.auth.signUp({ email, password });
        if (!error) window.location.href = "main.html";
    }

    async function logout() {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            window.location.replace("index.html"); // Ensure redirect happens
        }
    }

    const loginButton = document.querySelector(".login-button");
    const signupButton = document.querySelector(".signup-button");
    const logoutButton = document.querySelector(".logout-button");
    const emailField = document.querySelector("input[type='email']");
    const passwordField = document.querySelector("input[type='password']");

    if (loginButton) {
        loginButton.addEventListener("click", login);
        passwordField.addEventListener("keydown", (event) => handleEnterKey(event, login));
    }

    if (signupButton) {
        signupButton.addEventListener("click", signup);
        passwordField.addEventListener("keydown", (event) => handleEnterKey(event, signup));
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
});
