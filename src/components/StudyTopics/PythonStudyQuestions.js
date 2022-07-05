import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function PythonStudyQuestions () {
  const [languageInput, setLanguageInput] = useState('')
  const [result, setResult] = useState()

  async function onSubmit (event) {
    event.preventDefault()
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ language: languageInput })
    })
    const data = await response.json()
    setResult(data.result)
    setLanguageInput('')
  }

  return (
    <div>
      <h1>This is the Python Study Question Page</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Ask your question</Form.Label>
          <Form.Control as='textarea' rows={3} />
          <input
            type='text'
            name='language'
            placeholder='Enter a question about Python'
            value={languageInput}
            onChange={(e) => setLanguageInput(e.target.value)}
          />

          <Button className='form-button btn btn-outline-light' type='submit'>
                    Send
          </Button>
        </Form.Group>
      </Form>

      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Response</h1>
          </Card.Title>
          <Card.Text>
            <h4>{result}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
