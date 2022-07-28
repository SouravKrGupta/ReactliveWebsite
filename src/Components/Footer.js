import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <div>

                <footer className="text-light py-2" style={{backgroundColor:"#00FF00", position:"absolute", bottom:"0", width:"100%"}}>

                    <div className="footer-copyright text-center">© 2022 Copyright :
                        <Link to={"https://www.linkedin.com/in/sourav-kumar-gupta-18b638200/"} style={{color: "white"}} className='mx-1'>Sourav Kumar Gupta</Link>
                    </div>

                </footer>
            </div>
        )
    }
}