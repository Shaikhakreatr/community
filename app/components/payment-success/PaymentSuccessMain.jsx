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
          ? "w-full h-[94vh] mt-[30px] flex flex-col items-center"
          : "w-full h-[94vh] mt-[50px]  flex flex-col justify-center items-center"
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

