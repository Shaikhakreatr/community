"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import UpcomingHero from "@/app/components/events-upcoming/UpcomingHero";
import { useParams } from "next/navigation";

const UpcomingDetails = () => {
  const { id } = useParams();
  const [upcomingData, setUpcomingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcomingData = async () => {
      try {
        const response = await fetch(
          `https://erfaz8h6s3.execute-api.ap-south-1.amazonaws.com/dev/eventInfo/`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const upcomingData = data.find((upcoming) => upcoming.id === id);
        if (upcomingData) {
          setUpcomingData(upcomingData);
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
      fetchUpcomingData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!upcomingData) {
    return <div>Career not found</div>;
  }

  return (
    <main className="bg-img pt-[6.25rem]">
      <Header />
      <UpcomingHero upcomingData={upcomingData} />
      <Footer />
    </main>
  );
};

export default UpcomingDetails;
