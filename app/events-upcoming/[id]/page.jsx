"use client";

import { useState, useEffect } from "react";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import React from "react";
import UpcomingHero from "@/app/components/events-upcoming/UpcomingHero";
import { useParams } from "next/navigation";
import Spinner from "@/app/components/spinner/Spinner";

const UpcomingDetails = () => {
  const { id } = useParams();
  const [upcomingData, setUpcomingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_EVENT_INFO_URI = process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI;
  // State for tracking unsaved changes
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    console.log("UpcomingDetails page is opened");

    // Handle browser unload event to prompt user about unsaved changes
    const handleBeforeUnload = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = ""; // This is required for most browsers to show the confirmation dialog
      }
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  useEffect(() => {
    const fetchUpcomingData = async () => {
      try {
        const response = await fetch(BACKEND_EVENT_INFO_URI);
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
    return (
      <div>
        <Spinner />
      </div>
    );
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
      <UpcomingHero
        upcomingData={upcomingData}
        setHasUnsavedChanges={setHasUnsavedChanges}
      />
      <Footer />
    </main>
  );
};

export default UpcomingDetails;
