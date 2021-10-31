import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'

import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const NavbarMovies = () => {

    const [query, setQuery] = useState("")
    
    const handleOnChange = (e) => {
        setQuery(e.target.value)
        console.log(e.target.value)
    }
    
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${query}`)

    }
    
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">Moovee</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/genre">Genre</Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
            aria-label="Search"
            value={query}
            onChange={handleOnChange}
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavbarMovies
