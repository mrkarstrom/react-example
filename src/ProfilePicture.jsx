import React, { useState } from 'react';

function ProfilePicture() {
  const imageUrl = '../src/assets/profiole.jpg';
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = (e) => {
    e.stopPropagation(); // Stop the event from propagating to the image
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="profile-picture-container" onClick={handleClick}>
      Click Image to {isVisible ? <span>hide</span> : <span>show</span>}
      {isVisible && <img src={imageUrl} alt="Profile" />}
    </div>
  );
}

export default ProfilePicture;
