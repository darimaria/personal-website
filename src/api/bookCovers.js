import React from "react";
import { useQueries } from "@tanstack/react-query";

export async function fetchBookCover(title, author) {
  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(author);
  const requestUrl = `https://bookcover.longitood.com/bookcover?book_title=${encodedTitle}&author_name=${encodedAuthor}`;

  try {
    const response = await fetch(requestUrl);
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return { title, coverUrl: data.url || data };
  } catch (err) {
    console.error(`Error fetching cover for ${title}:`, err);
    return { title, coverUrl: null };
  }
}

const books = [
  { title: "A Letter to My Daughter ", author: "Maya Angelou" },
  { title: "Omnivore's Dilemma", author: "Michael Pollan" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Tender is the Flesh", author: "Agustina Bazterrica"},
  { title: "I Who Have Never Known Men", author: "Jacqueline Harpman"},
];

export function useBookCovers() {
  return useQueries({
    queries: books.map((book) => ({
      queryKey: ["bookCover", book.title, book.author],
      queryFn: () => fetchBookCover(book.title, book.author),
    })),
  });
}

export { books }; // export the book list too so it can be used in components
