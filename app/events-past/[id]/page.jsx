"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import PastHero from "@/app/components/events-past/PastHero";
import { useParams } from "next/navigation";

const PastDetails = () => {
  const { id } = useParams();
  const [pastData, setPastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPastData = async () => {
      try {
        const response = await fetch(
          `https://erfaz8h6s3.execute-api.ap-south-1.amazonaws.com/dev/eventInfo/`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const pastData = data.find((past) => past.id === id);
        if (pastData) {
          setPastData(pastData);
        } else {
          setError(new Error("Upcoming data not found"));
        }
      } catch (error) {
        console.error("Error fetching upcoming data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchPastData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pastData) {
    return <div>Career not found</div>;
  }

  return (
    <main className="bg-img pt-[6.25rem]">
      <Header />
      <PastHero pastData={pastData} />
      <Footer />
    </main>
  );
};

export default PastDetails;
