import React, { useState } from 'react'
import { Dropdown, Card } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import './entry.style.css'
import { LoginForm } from '../../components/logIn/Login.compo'
import { ResetPassword } from '../../components/passowrd-reset/PasswordReset.compo';



export const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoader, setFormLoader] = useState('login')

    const handleOnChange = e => {
        const { name, value } = e.target

        switch (name) {
            case "email":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            default:
                break;
        }

        // console.log(name, value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();

        if (!email || !password) {
            return alert('fill up all form !!');
        }

        //TODO: call API to submit the form
        console.log(email, password);
    };

    const handleOnResetSubmit = e => {
        e.preventDefault();

        if (!email ) {
            return alert('plz. enter email !!');
        }

        //TODO: call API to submit the form
        console.log(email);
    };

    const formSwitcher = formType => {
        setFormLoader(formType)

    }

    return (
        <div className="entry-page bg-info">
            <Card className="form-box">
                {formLoader === 'login' &&
                    <LoginForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                        pass={password}
                    />}

                {formLoader === "reset" &&
                    <ResetPassword
                        handleOnChange={handleOnChange}
                        handleOnResetSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                    />}

            </Card >
        </div>
    )
}
