import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PaymentGateway from '../components/payment-gateway/PaymentGateway'

const PaymentSuccess = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
        <Header />
            <PaymentGateway />
        <Footer />
    </main>
  )
}

export default PaymentSuccess;
