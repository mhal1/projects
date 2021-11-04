import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <h4 className="App p-5">
                <code>Welcome to Llap Software Group</code>
            </h4>
            <div className="container-fluid">
                <div className="row">
                    <p className="ps-5">
                        <code>We believe in keeping it simple...</code>
                    </p>
                </div>
            </div>
            <div className="container-fluid p-5">
                <p>
                    <code>Our engineered products</code>
                </p>
                <div className="row row-cols-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ride Sharing</h5>
                                <p className="card-text">Explore <span>&#8594;</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Moud Oils</h5>
                                <p className="card-text">Explore <span>&#8594;</span> </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">HR Portal</h5>
                                <p className="card-text">Explore <span>&#8594;</span> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
);
}

export default App;
