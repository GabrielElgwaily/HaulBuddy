// Initialize Supabase
const SUPABASE_URL = "https://xwtwdfysnretubvxzyxf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dHdkZnlzbnJldHVidnh6eXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NTQ2OTAsImV4cCI6MjA1NTMzMDY5MH0.17BQxUJONl733T3A7IcxAqrdr1XX93GIvFD-fTiDaKI";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Handle Sign In
const loginButton = document.querySelector(".login-button");
if (loginButton) {
    loginButton.addEventListener("click", async () => {
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const { user, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            alert("Login failed: " + error.message);
        } else {
            alert("Logged in successfully!");
            window.location.href = "main.html"; // Redirect to main page
        }
    });
}

// Handle Sign Up
const signupButton = document.querySelector(".signup-button");
if (signupButton) {
    signupButton.addEventListener("click", async () => {
        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        const { user, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            alert("Sign-up failed: " + error.message);
        } else {
            console.log("New user:", user);
            alert("Sign-up successful! Redirecting...");
            window.location.href = "main.html"; // Redirect to main page
        }
    });
};

// Handle Logout
const logoutButton = document.querySelector(".logout-button");
if (logoutButton) {
    logoutButton.addEventListener("click", async () => {
        await supabase.auth.signOut();
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to login page
    });
}

