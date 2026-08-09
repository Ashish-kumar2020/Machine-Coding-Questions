const StoryViewer = ({ story, onClose, onNext, onPrevious }) => {
  return (
    <div className="story-viewer">
      <button className="close-button" onClick={onClose}>
        X
      </button>

      <img
        src={story.image}
        alt=""
        className="story-viewer-image"
      />

      <button
        className="story-navigation story-navigation-left"
        onClick={onPrevious}
      >
        Prev
      </button>

      <button
        className="story-navigation story-navigation-right"
        onClick={onNext}
      >
        Next
      </button>
    </div>
  );
};

export default StoryViewer;