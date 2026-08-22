import "./App.css";

import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <div className="app">
            <div className="app-content">
                <AppRouter />
            </div>
        </div>
    );
}

export default App;