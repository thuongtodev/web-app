import React from 'react'
import styles from './styles.scss'
import { Form, Button } from 'react-bootstrap'
import Link from 'next/link'

const ContactUsForm = () => {
  return (
    <>
      <div className={styles.fullHeader} />
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row align-items-start justify-content-between mb-5">
            <div className="col-12 col-md-12 entry-content">
              <p className={styles.titleContact}>
                Have a question, news tip or feedback for the CoinGeek team? Get
                in touch with us below.
              </p>
            </div>
          </div>

          <div className="row align-items-start justify-content-center mb-5">
            <div className="col-12 col-md-8">
              <Form>
                <Form.Group controlId="formGroupEmail" className="col-6">
                  <Form.Label>First name*</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-6">
                  <Form.Label>Last name*</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-6">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="text" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-6">
                  <Form.Label>Topic*</Form.Label>
                  <Form.Control type="text" placeholder="Topic" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-12">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-12">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    pplaceholder="Type your message"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword" className="col-12">
                  <Form.Check type="checkbox">
                    <Form.Check.Input type="checkbox" isValid />
                    <Form.Check.Label className={styles.label}>
                      <span>I agree to the by </span>
                      <Link href="/terms-of-use">
                        <span>Legal Disclaimer </span>
                      </Link>

                      <span>submitting this form</span>
                    </Form.Check.Label>
                  </Form.Check>
                </Form.Group>
                <Form.Group>
                  <Button
                    variant="outline-dark"
                    className={styles.buttonSubmit}
                  >
                    SEND
                  </Button>
                </Form.Group>
                <div className={styles.recapcha}>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
