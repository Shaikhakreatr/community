import React from "react";
import Image from "next/image";

const PaymentSuccessMob = () => {
  return (
    <>
      <Image
        src={"/assets/images/payment/tickmark_successful.svg"}
        alt="success"
        height={123.03}
        width={129.04}
        className="h-[15%] w-[20%] mt-[10%]"
      />

      <h1 className="content text-[.875rem] font-[800]">{`You're good to go!`}</h1>
      <div
        className="h-[100vw] w-[70vw]  flex flex-col items-center mt-[4%] mb-[4%]"
        style={{
          backgroundImage: "url('/assets/images/payment/paymentMobile.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" p-[2%] h-[70%] w-[70%] flex flex-col">
          <Image src="/assets/images/payment/payment-success.png" height={334} width={334} alt="payment success" />
          <div className="w-[100%] p-[2%] text-center">
            <h1 className=" text-[10px] page-subhead text-center">
              Design Thinking Workshop-Extended Version
            </h1>
            <p className=" pt-[2vw] content-neue-medium text-[7px]">Sat 12 Jan 2024</p>
            <p className="content-neue-medium text-[7px]">10:00 AM</p>
            <p className="content-neue-medium text-[7px]">Slay Coffee, Koramangala</p>
          </div>
        </div>

        <div className="flex flex-col justify-between h-[30%]">
          <div className=" flex justify-center pt-[4%]">
            <h1 className="text-[2.7vw] content font-[800]">
              Booking ID:89DJNSOOSDW
            </h1>
          </div>
          <Image
            src={"/assets/images/payment/divider.svg"}
            alt="divider"
            height={0}
            width={700}
            className="pt-[10%] pr-[6%] pl-[6%]"
          />
          <div className="flex justify-between p-[2%]">
            <h1 className="text-[1%]">Total Amount</h1>
            <h1 className="text-[1%]">INR 499.00</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessMob;
