import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const SearchForm = ({ handleOnChange, str }) => {
    // console.log(str);
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column as="3">
                        Search:{""}
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control
                            name="searchStr"
                            placeholder="Search...based on subject"
                            onChange={handleOnChange}
                            value={str}
                        />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}


SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}