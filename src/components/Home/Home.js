import React, { Component } from 'react'
import CardDisplay from '../Layout/CardDisplay'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

class Home extends Component {
  render () {
    return (
      <div>
        <Container className='body'>
          <Carousel></Carousel>
          <h1>Study Time</h1>
          <p>Pick a Topic to start studying!</p>

          <Row>
            <Col>
              <CardDisplay
                header='JavaScript Study Questions'
                title='Master Javascript'
                text='Become a Front-End master and practice!'
                theLink='/study-javascript'
              />
            </Col>
            <Col>
              <CardDisplay
                header='Python Study Questions'
                title='Master Python'
                text='Got a technical interview coming up? Refresh your memory with quick review of Python.'
                theLink='/study-python'
              />
            </Col>

            <Col>
              <CardDisplay
                header='Java Study Questions'
                title='Master Java'
                text='Java is the number one Android Language, great practice before you start your next Java project.'
                theLink='/study-python'
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
