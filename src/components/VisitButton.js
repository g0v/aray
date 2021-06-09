import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

function VisitButton({
  url = '',
  title = '',
  tooltip,
  icon,
  className,
  color = 'primary',
  variant = 'outlined',
  style = {},
}) {
  if (typeof url !== 'string') return null;

  const isDisabled = (!url || url === '' || (!url.startsWith('http') && !url.startsWith('/')));
  const size = 'small';

  const tooltipTitle = tooltip || (isDisabled ? '' : title);

  if (icon) {
    return (
      <Tooltip title={tooltipTitle}>
        <span>
          <IconButton
            className={className}
            disabled={isDisabled}
            aria-label={title}
            // component="span"
            target="_blank"
            href={url}
            size={size}
            color={color}
          >
            {icon}
          </IconButton>
        </span>
      </Tooltip>);
  }
  if (url.startsWith('/')) {
    return (
      <Button
        className={className}
        variant={variant}
        color={color}
        size={size}
        to={url}
        disabled={isDisabled}
        component={Link}
      >
        {title}
      </Button>);
  }
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      size={size}
      target="_blank"
      href={url}
      disabled={isDisabled}
      style={style}
    >
      {title}
    </Button>);
}

VisitButton.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  tooltip: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};

export default VisitButton;
