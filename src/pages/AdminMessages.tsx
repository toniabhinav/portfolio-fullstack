import { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://portfolio-fullstack-acc2.onrender.com/admin/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Contact Messages</h2>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((m: any) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}