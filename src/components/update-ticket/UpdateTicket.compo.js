import React from 'react'
import { Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'

export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {

    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br />
            <Form.Text>Please reply your message here to update the ticket</Form.Text>
            <Form.Control
                as="textarea"
                row="5"
                name=''
                value={msg}
                onChange={handleOnChange}
            />
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>

        </Form>
    )
}

UpdateTicket.propsType = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired
}
