import './App.css';
import './CardDemo.css';
import img1 from './images/img1.png';

function Demo1() {
    return (
        <div>
            <h4 className="App p-5">
                <code style={{color: "blue"}}>Demo 1</code>
            </h4>
            <div className="container-fluid">
                <div className="row">

                    <div className="card mb-5 ms-5 me-5" id="cardDemo2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="imgBx">
                            <img src={img1}/>
                        </div>
                    </div>

                    <div className="card mb-5 ms-5 me-5" id="cardDemo">
                        <div className="imgBx">
                            <img src={img1}/>
                        </div>
                        <div className="contentBx">
                            <h3>Wireless headphones</h3>
                            <h2 className="price">$40.<small>99</small></h2>
                            <a href="#" className="buy">Buy Now</a>
                        </div>
                    </div>

                    <div className="card mb-5 ms-5" id="cardDemo3">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="contentBx">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Demo1;
