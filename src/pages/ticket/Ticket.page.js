import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.compo'
import tickets from '../../assests/data/dummy-tickets.json'
import { MessageHistory } from '../../components/message-history/MessageHistory.compo'
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.compo'

const ticket = tickets[0];

export const Ticket = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {}, [message])

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = () => {
        alert('Form Submitted')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="subject">Subject: {ticket.subject}</div>
                    <div className="date">Ticket Opened: {ticket.addedAt}</div>
                    <div className="status">Status: {ticket.status}</div>
                </Col>
                <Col>
                    <Button variant="outline-info" >Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr />

            <Row className="mt-4">
                <Col>
                    <UpdateTicket 
                    msg={message}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}

                    />
                </Col>
            </Row>
        </Container>
    )
}
