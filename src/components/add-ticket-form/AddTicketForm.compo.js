import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form.style.css'
import { shortText } from '../../utils/validation'

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDta, formDataError }) => {
    console.log(frmDta);
    return (
        <Card className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add new Ticket </h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3} >Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            // type="text"
                            name="subject"
                            placeholder="subject"
                            onChange={handleOnChange}
                            value={frmDta.subject}
                            required
                            // minLength="3"
                            maxLength="100"
                        />
                        <Form.Text className="text-danger">
                            {formDataError.subject && "subject is required!"}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3} >
                        Issue Found
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type="date"
                            name="issuedDate"
                            placeholder="issuedDate"
                            onChange={handleOnChange}
                            value={frmDta.issuedDate}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3} >Details</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            as="textarea"
                            name="detail"
                            rows="5"
                            onChange={handleOnChange}
                            value={frmDta.detail}
                            required
                        />
                    </Col>

                </Form.Group>
                <Button type="submit" variant="info" d-block="true" >LogIn</Button>
                <br />
            </Form>
        </Card>
    )
}

{/* <Form.Group>
<Form.Label>Details</Form.Label>
<Form.Control
    as="textarea"
    name="details"
    rows="5"
    onChange={handleOnChange}
    required
/>
</Form.Group> */}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmDta: PropTypes.object.isRequired,
    formDataError: PropTypes.object.isRequired,
}
