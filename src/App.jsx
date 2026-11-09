import { useState } from "react";
import Box from "./Box.jsx";

function App() {
    const [message, setMessage] = useState("--->Itt lesz message!<---");

    return (
        <main className="app">
            <section className="content">
                <h1>Gombok</h1>
                <p
                    className="message"
                    aria-live="polite"
                    style={{ fontStyle: "italic" }}
                >
                    {message}
                </p>
                <div className="box-list">
                    <Box
                        text="-Elso box-"
                        onClick={() => setMessage("Clicked!")}
                    />
                    <Box
                        text="-Masodik box-"
                        onClick={() => setMessage("2. Gomb Click!")}
                    />
                    <Box
                        text="-Harmadik box-"
                        onClick={() => setMessage("Mukodj!")}
                    />
                </div>
                <h1>:)</h1>
            </section>
        </main>
    );
}

export default App;
