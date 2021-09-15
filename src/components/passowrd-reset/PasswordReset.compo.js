import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';


export const ResetPassword = ({ handleOnChange, email, handleOnResetSubmit, formSwitcher }) => {


    return (
        <Container>

            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                value={email}
                            //required
                            />
                        </Form.Group>
                        <br />
                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher('login')}>LOgging Again ?</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
