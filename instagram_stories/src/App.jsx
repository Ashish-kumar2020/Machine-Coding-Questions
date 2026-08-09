import { useEffect, useState } from "react";
import "./App.css";
import StoryList from "./component/StoryList";
import StoryViewer from "./component/StoryViewer";

function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openStory = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("/stories.json");

        if (!response.ok) {
          throw new Error("Problem while fetching stories");
        }

        const data = await response.json();

        setStories(data);
      } catch (error) {
        setError(error.message);
        console.log("Fetch Failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  useEffect(() => {
    if (!isViewerOpen) {
      return;
    }

    const timer = setTimeout(() => {
      if (currentIndex < stories.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsViewerOpen(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, isViewerOpen, stories.length]);

  if (loading) {
    return <h2>Loading stories...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsViewerOpen(false);
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setIsViewerOpen(false);
    }
  };

  return (
    <div className="mobile-app">
      <main className="app">
        <StoryList stories={stories} onStoryClick={openStory} />

        {isViewerOpen && (
          <StoryViewer
            story={stories[currentIndex]}
            currentIndex={currentIndex}
            totalStories={stories.length}
            onClose={() => setIsViewerOpen(false)}
            onNext={nextStory}
            onPrevious={prevStory}
          />
        )}
      </main>
    </div>
  );
}

export default App;
