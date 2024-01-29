import React from 'react';
//import PropTypes from 'prop-types';

function ProfilePicture(props) {
  const imageUrl = '../src/assets/profiole.jpg';

  const handleClick = () => console.log('Test');
  return (
    <div>
      <img onClick={handleClick} src={imageUrl} />
    </div>
  );
}

//ProfilePicture.propTypes = {};

export default ProfilePicture;
