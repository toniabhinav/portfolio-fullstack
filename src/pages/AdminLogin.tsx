import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
      const res = await fetch(
        "https://portfolio-fullstack-acc2.onrender.com/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin/messages");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", width: "250px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: "#444",
            color: "white",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}