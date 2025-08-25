import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles/ReadingPage.css"; // optional for styling
import { fetchBookCover, useBookCovers, books } from "../api/bookCovers";
import { useQuery } from "@tanstack/react-query";

const ReadingPage = () => {
  const results = useBookCovers();

  const navigate = useNavigate();

  return (
    <div className="reading-page">
      <div className="reading-header">
        <h1 className="reading-title">Books I'm Reading</h1>
        <button className="back-button" onClick={() => navigate("/#more")}>
          ← Back to Home
        </button>
      </div>
      <div className="grid grid-cols-7">
        {results.map((query, index) => {
          const { title, author } = books[index];

          if (query.isLoading) return <p key={index}>Loading {title}...</p>;
          if (query.isError) return <p key={index}>Error loading {title}</p>;

          const { coverUrl } = query.data || {};

          return (
            <div key={index} className="flex flex-col items-center">
              <h4>{title}</h4>
              <p className="text-sm text-gray-600">by {author}</p>
              {coverUrl ? (
                <img
                  src={coverUrl}
                  alt={`Cover of ${title}`}
                  style={{'width':'150px', 'height':'225px'}}
                />
              ) : (
                <p>No cover found</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadingPage;
