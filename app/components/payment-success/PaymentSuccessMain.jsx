"use client";
import Image from "next/image";
import React from "react";
import useIsMobile from "@/app/hooks/customHook";
import PaymentSuccessMob from "./payment-success-mob/PaymentSuccessMob";

const PaymentSuccessMain = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={
        isMobile
          ? "w-full h-[94vh]  flex flex-col items-center"
          : "w-full h-[94vh]   flex flex-col justify-center items-center"
      }
    >
      {isMobile ? (
        <PaymentSuccessMob />
      ) : (
        <>
        
          <Image
            src={"/assets/images/payment/tickmark_successful.svg"}
            alt="success"
            height={123.03}
            width={129.04}
            className="mt-[50 px] xl:h-[122px] xl:w-[130px] lg:h-[70px] lg:w-[70px] sm:h-[90px] sm:w-[95px]"
          />

          <h1 className="page-subhead mb-[20px] mt-[5px] xl:text-[35px] lg:text-[26px] sm:text-[24px]">
            {`You're good to go!`}
          </h1>
          <div
            className="xl:h-[520px] lg:mb-[80px] xl:w-[700px] lg:h-[365px] lg:w-[500px] sm:h-[400px] sm:w-[700px] lg:px-[25px] lg:py-[15px]"
            style={{
              backgroundImage: "url('/assets/images/payment/payment-card.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="gap-[15px] flex">
            <Image src="/assets/images/payment/payment-success.png"  height={334} width={334} alt="payment success" />
              <div className="flex flex-col justify-center ">
                <h1 className=" page-subhead xl:text-[35px] leading-[30px] mb-[18px] lg:text-[24px] sm:text-[22px]">
                  Design Thinking Workshop-Extended Version
                </h1>
                <p className="xl:text-[30px] lg:text-[20px] text-start sm:text-[16px]">Sat 12 Jan 2024</p>
                <p className="xl:text-[30px] lg:text-[20px] text-start sm:text-[16px]">10:00 AM</p>
                <p className="xl:text-[30px] lg:text-[20px] text-start sm:text-[16px]">Slay Coffee, Koramangala</p>
              </div>
            </div>
            <div className="flex flex-col justify-between ">
              <div className=" flex justify-center mt-[40px]">
                <h1 className="text-[1.5vw] content font-[800]">
                  Booking ID:89DJNSOOSDW
                </h1>
              </div>
              <Image
                src={"/assets/images/payment/divider.svg"}
                alt="divider"
                height={0}
                width={700}
                className="mt-[21px] mb-[10px]"
              />
              <div className="flex justify-between p-[2%]">
                <h1>Total Amount</h1>
                <h1>INR 499.00</h1>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentSuccessMain;




// 'use client'
// import React, { useEffect, useState } from 'react';

// const PaymentGateway = () => {
//   const amount = 500; // Amount in paise (100 paise = ₹1)
//   const [rzp1, setRzp1] = useState(null); // State variable for Razorpay instance
//   const [orderId, setOrderId] = useState(''); // State variable for order ID

// // /order/validate
//   useEffect(() => {
    
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//     script.async = true;
//     script.onload = () => {
//       const options = {
//         "key": 'rzp_test_QjgXchzWkXV70B', // Replace with your test key
//         "amount": amount,
//         "currency": "INR", // Assuming INR currency
//         "name": "Kreatr",
//         "description": "Test Transaction",
//         "image": "https://example.com/your_logo",
//         "order_id": orderId,
//         "handler": async function (response) {
//           const body = {
//             ...response,
//           };
//           const validateRes = await fetch("https://xbhfkqpomc.execute-api.ap-south-1.amazonaws.com/dev/order/validate",{
//             method:"POST",
//             body: JSON.stringify(body),
//             headers:{
//               "Content-Type":"application/json",
//             }
//           });
//           const jsonRes = await validateRes.json();
//           console.log(jsonRes)
//         },
//         "prefill": {
//           "name": "Arnav Kulshrestha",
//           "email": "arnav@theKreatr.com",
//           "contact": "9358600733"
//         },
//         "notes": {
//           "address": "Razorpay Corporate Office"
//         },
//         "theme": {
//           "color": "#3399cc"
//         }
//       };

//       setRzp1(new window.Razorpay(options));
      
//     };
//     document.body.appendChild(script);
//   }, [orderId]);

//   const fetchOrderId = async () => {
//     try {
//       const response = await fetch("https://xbhfkqpomc.execute-api.ap-south-1.amazonaws.com/dev/order", {
//         method: "POST",
//         body: JSON.stringify({
//           amount: amount,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch order ID');
//       }

//       const orderData = await response.json();
//       setOrderId(orderData.id);
//     } catch (error) {
//       console.error('Error fetching order ID:', error);
//       // Handle error appropriately, e.g., display an error message to the user
//     }
//   };

//   const paymentHandler = async (e) => {
//     e.preventDefault();

//     if (!rzp1) {
//       console.error('Razorpay instance not yet created. Waiting for script to load.');
//       return;
//     }else{
//       rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
//     }

//     if (!orderId) {
//       await fetchOrderId(); // Fetch order ID before opening Razorpay
//       if (!orderId) {
//         console.error('Failed to retrieve order ID. Please try again.');
//         return;
//       }
//     }

//     const options = { ...rzp1.options }; // Clone options to avoid mutation
//     options.order_id = orderId;

//     rzp1.open(options);
//   };

//   return (
//     <div className="product">
//       <h2>Tshirt</h2>
//       <p>Solid blue cotton Tshirt</p>
//       {/* <img src={TshirtImg} /> */}
//       <br />
//       <button className='border border-solid border-black bg-blue-400 text-black hover:bg-blue-500 hover:text-white px-6 py-5 rounded-lg m-3' onClick={paymentHandler}>Pay</button>
//     </div>
//   );
// };

// export default PaymentGateway;