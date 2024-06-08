"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import CareersMainContent from "@/app/components/careers-description/CareersMainContent";
import Spinner from "@/app/components/spinner/Spinner";

const CareerDetails = () => {
  const { id } = useParams();

  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch(
          "https://pcfja54uwi.execute-api.ap-south-1.amazonaws.com/dev/career/",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const careerData = data.find((career) => career.id === id);
        if (careerData) {
          setCareerData(careerData);
        } else {
          setError(new Error("Career not found"));
        }
      } catch (error) {
        console.error("Error fetching career data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCareerData();
    }
  }, [id]);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!careerData) {
  //   return <div>Career not found</div>;
  // }

  return (
    <>
      <main className="bg-img pt-[6.25rem]">
        <Header />
        {loading ? <Spinner /> : <CareersMainContent careerData={careerData} />}
        <Footer />
      </main>
    </>
  );
};

export default CareerDetails;
