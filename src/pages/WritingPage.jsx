import { React, useEffect, useState } from "react";
import essay1 from "../assets/essays/dignity_of_choice.md?raw";
import essay2 from "../assets/essays/language.md?raw";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Tag from "../components/Tag.jsx";
import "../styles/WritingPage.css";
import EssayListItem from "../components/EssayListItem";
import { useNavigate } from "react-router";

const essayFiles = [
  { raw: essay1, filename: "dignity_of_choice.md" },
  { raw: essay2, filename: "language.md" },
];

const WritingPage = () => {
  const [essays, setEssays] = useState([]);
  const [filteredTag, setFilteredTag] = useState(null);
  const [selectedEssay, setSelectedEssay] = useState(null);
  const [allTags, setAllTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const parsedEssays = essayFiles.map(({ raw, filename }) => {
      const { content, data } = matter(raw);
      return {
        title: data.title,
        tags: data.tags || [],
        subtitle: data.subtitle,
        date: data.date,
        content,
        filename,
      };
    });

    setEssays(parsedEssays);
    setSelectedEssay(parsedEssays[0]);
    const tags = new Set();
    parsedEssays.forEach((e) => e.tags.forEach((tag) => tags.add(tag)));
    setAllTags([...tags]);
  }, []);
  const filteredEssays = filteredTag
    ? essays.filter((e) => e.tags.includes(filteredTag))
    : essays;

  return (
    <div className="writing-page">
      <div className="writing-header">
        <h1 className="writing-title">My Writing</h1>
        <button className="back-button" onClick={() => navigate("/#more")}>
          ← Back to Home
        </button>
      </div>
      <div className="tags-container">
        <Tag
          labels={allTags}
          onClick={setFilteredTag}
          active={filteredTag ?? "All"}
        />
      </div>
      <div className="content-wrapper">
        <div className="essay-list">
          {filteredEssays.map((e) => (
            <EssayListItem
              key={e.filename}
              title={e.title}
              subtitle={e.subtitle}
              date={e.date}
              onClick={() => setSelectedEssay(e)}
              isActive={selectedEssay?.filename === e.filename}
            />
          ))}
        </div>
        <div className="essay-content">
          {selectedEssay && (
            <>
              <h2>{selectedEssay.title}</h2>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => (
                    <p
                      style={{ textIndent: "2em", marginTop: "1em" }}
                      {...props}
                    />
                  ),
                }}
              >
                {selectedEssay.content}
              </ReactMarkdown>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
