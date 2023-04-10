import reactLogo from './logo.svg';
import djangoLogo from './django.svg';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={reactLogo} className="App-React-Logo" id="react" alt="logo" />

                <img src={djangoLogo} className="App-Django-Logo" id="django" alt="logo" />

                <h1 className="Text">A React and Django Project</h1>
            </header>
        </div>
    );
}

export default App;
