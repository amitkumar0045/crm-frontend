import React, { useState, useEffect} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb.compo'
import { SearchForm } from '../../components/search-form/SearchForm.compo'
import { TicketTable } from '../../components/ticket-table/TicketTable.compo'
import tickets from '../../assests/data/dummy-tickets.json'

export const TicketLists = () => {
    const [str, setStr] = useState('')
    const [dispTicket, setDisplayTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket])

    const handleOnChange = (e) => {
        const{value} = e.target;
        //setStr(e.target.value) //conseling it in SearchFormCompo
        // console.log(e.target);
        // console.log(value);
        setStr(value);
        searchTicket(value)
    }

    const searchTicket = (sttr) => {
        const displayTickets = tickets.filter((row) => 
         row.subject.toLowerCase().includes(sttr.toLowerCase())
        );
        console.log(displayTickets);
        setDisplayTicket(displayTickets)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket Lists" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="info">Add New Ticket </Button>
                </Col>
                <Col className="text-right">
                    <SearchForm
                        str={str}
                        handleOnChange={handleOnChange}
                    />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                 {/* <TicketTable tickets={tickets}/> */}
                 <TicketTable tickets={dispTicket}/>
                </Col>
            </Row>
        </Container>
    )
}
