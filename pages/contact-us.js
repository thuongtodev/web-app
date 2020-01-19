import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import NewLetterBlock from '../components/NewLetterBlock'
import ContactUsForm from '../components/ContactUsForm'

const ContactUs = () => {
  return (
    <HomeLayout title="Contact Us - CoinGeek">
      <ContactUsForm />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default ContactUs
