import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';


export const LoginForm = ({ handleOnChange, email, pass, handleOnSubmit, formSwitcher }) => {
    return (
        <Container>

            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                value={email}
                            // required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handleOnChange}
                                placeholder="password required"
                            // required
                            />
                        </Form.Group>
                        <br />
                        <Button type="submit">LogIn</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher('reset')}> forgot password ?</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}
