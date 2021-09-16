import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.compo'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.compo'
import {shortText} from '../../utils/validation'

const initialFormData = {
    subject: '',
    issuedDate: '',
    detail: "",
};

const initialFormDataErr = {
    subject: false,
    issuedDate: false,
    detail: false,
};

export const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormData);
    const [formDataError, setFormDataError] = useState(initialFormDataErr)

    useEffect(() => { }, [formData,formDataError]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        //console.log(name, value);

        setFormData({
            // ...initialFormData,
            ...formData,
            [name]: value
        })
        // console.log(name, value);
    }

    const handleOnSubmit =async (e) => {
        e.preventDefault()
        //console.log('Form submit request received' ,formData);

        setFormDataError(initialFormDataErr);

        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialFormDataErr,
            subject:!isSubjectValid,
        });
        console.log("Form submit request received" ,formData );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm
                        handleOnChange={handleOnChange}
                        frmDta={formData}
                        handleOnSubmit={handleOnSubmit}
                        formDataError={formDataError}
                    />
                </Col>
            </Row>
        </Container>
    )
}
