import React from "react";
import "../../assets/css/login.css"
import { Link } from 'react-router-dom';
import authLayout from "../../hoc/authLayout";
import background from "../../assets/images/pipi.png"
class LoginPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return <>
        <div style={{ backgroundImage: `url(${background})` }}>
                    
            <form className="login-form" style={{ backgroundImage: `url(${background})` }} >
                <div className="d-flex align-items-center my-4">
                    <h1 className="text-center fw-normal mb-0 me-3">Authentification</h1>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email</label>
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">Mot de passe</label>
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Mot de passe oublier?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="/home" type="button" className="btn btn-primary btn-lg">Connexion</Link>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Pas de compte? <a href="#!"
                        className="link-danger">Nouveau Compte</a></p>
                </div>
            </form>
            </div>
        </>
    }
}

export default authLayout(LoginPage);