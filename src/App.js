import './App.css';
import './CardDemo.css';
import {Link} from "react-router-dom";
import javaL from './images/java-logo-vector.svg';
import pythonL from './images/python-logo-vector-1.svg';
import pythonSmallL from './images/python-small-logo-vector.svg';
import angularL from './images/angular-logo-vector-1.svg';
import reactL from './images/react-logo-vector-1.svg';
import springL from './images/spring-logo-vector.svg';
import mariaDBL from './images/mariadb-logo-vector.svg';
import reduxL from './images/redux-logo-vector.svg';
import paypalL from './images/paypal-logo-vector.svg';
import rbsL from './images/rbs-group-logo-vector.svg';
import isL from './images/Infosys-01.svg';
import htmlL from './images/html5-logo-vector.svg';
import cssL from './images/css3-logo-vector.svg';
import postgresL from './images/postgresql-inc-logo-vector.svg';
import bootstrap from './images/bootstrap-logo-vector.svg';
import cplusL from './images/c-logo-vector.svg';
import mongoDBL from './images/mongodb-logo-vector.svg';
import javascriptL from './images/javascript-logo-vector.svg';
import typescriptL from './images/Typescript_logo_2020.svg';
import mavenL from './images/Apache_Maven_logo.svg';
import sqlL from './images/Oracle_SQL_Developer-Logo.wine.svg';

function App() {
    return (
        <div>
            <h4 className="App p-5">
                <code style={{color: "blue"}}>Welcome to Muhamed Halimi's portfolio</code>
            </h4>
            <div className="container-fluid ps-5 pe-5 mb-5 c1">
                <p >
                    I strive to continuously improve myself, develop and strengthen skills which will add value to
                    society. Successfully tackling the perplexing modules, during my Physics Masters from Imperial
                    College
                    London, has
                    grown me into an effective leader and team player with strong analytical, numerical and problem
                    solving
                    skills.
                </p>
            </div>
            <div className="container-fluid ps-5 pe-5 mb-5 mt-5 c1">
                <div className="row">
                    <code className="text-center mt-3" style={{color: "blue"}}> Client projects</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-1 row-cols-sm-2">
                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img className="rbsLogo" src={rbsL}/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-3">
                                <div className="card-body">
                                    <img className="infoSysLogo" src={isL}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container-fluid ps-5 pe-5 mt-5 c1">
                <div className="row">
                    <code className="text-center" style={{color: "blue"}}>Technology Stack</code>
                    <br/>
                    <br/>
                    <code style={{color: "blue"}}>Programming Languages:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-3 row-cols-md-4 row-cols-lg-6">
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="jLogo1" src={javaL}/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="sqlLogo" src={sqlL}/> SQL
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="jsLogo mb-2" src={javascriptL}/> JavaScript
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="jsLogo mb-2" src={typescriptL}/> TypeScript
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center d-flex align-items-center justify-content-center">
                                    <img className="htmlLogo" src={htmlL}/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="cssLogo" src={cssL}/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="pLogo1 mb-2" src={pythonSmallL}/>
                                    <p className="text-center">
                                        Python
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="cplusLogo " src={cplusL}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <code style={{color: "blue"}}>Frontend:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
                        <div className="col offset-lg-2 offset-xl-2">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="rLogo mb-2" src={reactL}/> React
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="aLogo mb-2" src={angularL}/> Angular
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="bLogo mb-2" src={bootstrap}/> Bootstrap
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="reLogo mb-3" src={reduxL}/> Redux
                                </div>
                            </div>
                        </div>
                    </div>

                    <code style={{color: "blue"}}>Backend Web Frameworks:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
                        <div className="col offset-3 offset-md-5 offset-lg-5 offset-xl-5">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="sLogo mb-3" src={springL}/> Spring Boot
                                </div>
                            </div>
                        </div>
                    </div>

                    <code style={{color: "blue"}}>Databases:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
                        <div className="col offset-md-2 offset-lg-3 offset-xl-3">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="poLogo" src={postgresL}/> PostgresSQL
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body text-center d-flex align-items-center justify-content-center">
                                    <img className="mDBLogo mb-4" src={mariaDBL}/>
                                </div>
                                <p className="text-center mt-2">
                                    MariaDB
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 mb-5">
                                <div className="card-body ">
                                    <img className="mLogo mb-5" src={mongoDBL}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <code style={{color: "blue"}}>Project Management:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
                        <div className="col offset-3 offset-md-5 offset-lg-5 offset-xl-5">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="maLogo ms-2" src={mavenL}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <code style={{color: "blue"}}>Extras:</code>
                    <br/>
                    <br/>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
                        <div className="col offset-3 offset-md-5 offset-lg-5 offset-xl-5">
                            <div className="card border-0 mb-5">
                                <div className="card-body text-center">
                                    <img className="ppLogo" src={paypalL}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Web Design projects*/
            }
            <div hidden="true" className="container-fluid ps-5 pe-5 c1">
                <p>
                    <code style={{color: "blue"}}>Web Designs</code>
                </p>
                <div className="row row-cols-2">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Demo 1</h5>
                                <Link style={{color: 'black', fontSize: '15px', textDecoration: 'none'}}
                                      className="bd-highlight" to='/demo1'
                                >Explore <span>&#8594;</span></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Demo 2</h5>
                                <Link style={{color: 'black', fontSize: '15px', textDecoration: 'none'}}
                                      className="bd-highlight" to='/demo2'
                                >Explore <span>&#8594;</span></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*Full Stack projects*/
            }
            <div className="container-fluid ps-5 pe-5 c1">
                <p>
                    <code style={{color: "blue"}}>Full stack apps </code>
                </p>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Ride Sharing</h5>
                                <a className="card-text" style={{cursor: "pointer",textDecoration: 'none', color:'black'}}
                                >Explore <span>&#8594;</span></a>
                            </div>
                        </div>
                    </div>

                    <div className="col" hidden="true">
                        <div className="card mb-5">
                            <div className="card-body">
                                <h5 className="card-title">Moud Oils</h5>
                                <p className="card-text">Explore <span>&#8594;</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*Java projects*/
            }
            <div className="container-fluid ps-5 pe-5 mb-5 c1">
                <p>
                    <code style={{color: "blue"}}><img className="jLogo" src={javaL}/> projects</code>
                </p>
                <div className="row row-cols-1 row-cols-lg-4">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Trailing zeros for factorial number</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">int32 to IPv4</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Number generation </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning">
                                <Link style={{color: 'black', fontSize: '21px', textDecoration: 'none'}}
                                      className="bd-highlight" to='/java'
                                >Explore all Java projects <span>&#8594;</span></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*Python projects*/
            }
            <div className="container-fluid ps-5 pe-5 mb-5 c1">
                <p>
                    <code style={{color: "blue"}}><img className="pLogo" src={pythonL}/> projects</code>
                </p>
                <div className="row row-cols-1 row-cols-lg-4">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">File Compression</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col" hidden="true">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Mars Satellite Orbit</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col" hidden="true">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Self-organised Criticality</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning">
                                <Link style={{color: 'black', fontSize: '21px', textDecoration: 'none'}}
                                      className="bd-highlight" to='/python'
                                >Explore all Python projects <span>&#8594;</span></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
        ;
}

export default App;
