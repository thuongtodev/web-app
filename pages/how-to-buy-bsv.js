import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import NewLetterBlock from '../components/NewLetterBlock'
import HowToBuy from '../components/HowToBuy'

const HowToBuyBsv = () => {
  return (
    <HomeLayout title="How to Buy BSV">
      <HowToBuy />
      <NewLetterBlock />
    </HomeLayout>
  )
}

export default HowToBuyBsv
