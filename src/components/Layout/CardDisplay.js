import React from 'react'
import { Card, Button, Nav } from 'react-bootstrap'

function CardDisplay (props) {
  const { header, title, text, theLink } = props

  return (
    <>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header>{header}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Nav.Link href={theLink} />
            <Button variant='primary' size='lg'>
                        Get Started
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default CardDisplay
