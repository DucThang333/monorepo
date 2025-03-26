import { useState, useEffect } from "react"; import { fetchLogins } from "@/api/loginApi";
export default function LoginPage() {
  const [data, setData] = useState([]); useEffect(() => { fetchLogins().then(setData); }, []); return (
    <div>
      <h1>Login Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key='{item.id}'>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}