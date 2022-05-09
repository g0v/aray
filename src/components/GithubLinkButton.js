import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';

import VisitButton from './VisitButton';

function GithubLinkButton({ url, title = 'GitHub', className }) {
  const githubUrl = url ?
    (url.startsWith('https://github.com/') ? url : `https://github.com/${url}`) :
    undefined;

  return (
    <VisitButton
      className={className}
      disabled={true}
      url={githubUrl}
      title={title}
      color="inherit"
      icon={<GitHubIcon />}
    />);
}

GithubLinkButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
};

export default GithubLinkButton;
