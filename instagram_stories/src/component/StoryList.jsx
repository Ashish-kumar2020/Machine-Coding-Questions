const StoryList = ({ stories ,onStoryClick}) => {
  return (
    <div className="horizontal-list">
      {stories.map((story,index) => (
        <div className="story-item" key={story.id} onClick={() => onStoryClick(index)}>
          <img
            src={story.image}
            alt=""
            className="user-story-icon"
          />
        </div>
      ))}
    </div>
  );
};

export default StoryList;