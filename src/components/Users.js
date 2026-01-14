import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("✅ Users component MOUNTED");

        const controller = new AbortController();

        fetch("https://jsonplaceholder.typicode.com/users", {
            signal: controller.signal,
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("🟡 Fetch aborted (component unmounted)");
                } else {
                    console.error("❌ Real fetch error:", error);
                }
            });

        // 🔥 Cleanup
        return () => {
            console.log("❌ Users component UNMOUNTED (cleanup)");
            controller.abort();
        };
    }, []);

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
