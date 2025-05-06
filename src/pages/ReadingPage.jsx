import React, { useState, useEffect } from "react";
import "../styles/ReadingPage.css"; // optional for styling

const apiUrl = "https://bookcover.longitood.com/bookcover?";
const ReadingPage = () => {
  const books = {
    "Letter to My Daughter": "Maya Angelou",
    "State of Siege": "Mahmoud Darwish",
  };

  const [covers, setCovers] = useState([]);

  useEffect(() => {
    const fetchCovers = async () => {
      const coverPromises = Object.entries(books).map(
        async ([title, author]) => {
          const encodedTitle = encodeURIComponent(title);
          const encodedAuthor = encodeURIComponent(author);
          const reqUrl = `${apiUrl}book_title=${encodedTitle}&author_name=${encodedAuthor}`;
          try {
            const response = await fetch(reqUrl);
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            return { title, coverUrl: data.url || data }; // adjust depending on API format
          } catch (err) {
            console.error(`Error fetching cover for ${title}:`, err);
            return null;
          }
        }
      );

      const resolvedCovers = (await Promise.all(coverPromises)).filter(Boolean);
      setCovers(resolvedCovers);
    };

    fetchCovers();
  }, []);

  return (
    <div className="reading-page">
      <h1>Books I'm Reading</h1>
      <div className="cover-grid">
        {covers.map((book, index) => (
          <div className="book-item" key={index}>
            <img src={book.coverUrl} alt={book.title} />
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingPage;
