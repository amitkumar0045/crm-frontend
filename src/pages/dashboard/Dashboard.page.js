import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.compo'
import tickets from '../../assests/data/dummy-tickets.json'
import {BreadCrumb} from '../../components/breadcrumb/BreadCrumb.compo'

export const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Dashboard"></BreadCrumb>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    {/* =={{'font-size':'2rem'== its an obj. so writting it on quation }} */}
                    <Button variant="info" style={{ fontSize: "2rem", padding: "10px 30px" }}>Add New Ticket</Button>
                </Col>
            </Row>

            <Row className="text-center mt-5 mb-2">
                <Col>
                    <div>Total tickets : 50</div>
                    <div>Pending tickets : 4</div>
                </Col>
            </Row>

            <Row>
                <Col className="mt-2"> Recently Added Tickets </Col>
            </Row>
            <hr />
            <Row>
                <Col className="recent-ticket">
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    )
}
