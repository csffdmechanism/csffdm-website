import React from 'react';
import { formatDate, isArray } from '../../../utils';
import TagList from '../../Global/Tag/TagList';
import Link from '../../Global/Link/Link';
import { ReactSVG } from 'react-svg';
import { GatsbyImage } from 'gatsby-plugin-image'; // Import GatsbyImage
import arrowIcon from '../../Icons/resource-arrow.svg';

import './styles.scss';

const ResourceCard = ({ resource, className = '' }) => {
  const { title, date, introduction, externalUrl, tags = [], mainImage } = resource;

  // Shorten introduction text if it's too long
  const intro = introduction.length > 0 ? introduction.substring(0, 200) + '...' : title;

  // Determine link: either an external URL or resource link
  let link = '';
  externalUrl != null ? (link = externalUrl.length > 0 ? externalUrl : resource) : (link = resource);

  return (
    <article className={`resource-card ${className}`}>
      <Link to={link}>
        {/* Check if mainImage exists, and render using GatsbyImage */}
        {mainImage && mainImage.gatsbyImageData ? (
          <GatsbyImage
            image={mainImage.gatsbyImageData}
            alt={mainImage.alt || 'Resource Image'} // Use alt text if available
            className="resource-card-image" // Add class for styling
          />
        ) : (
          <div className="resource-card-image-placeholder"></div>
        )}

        {isArray(tags) ? <TagList tags={tags} /> : <div className="tags-list" />}
        {date && <span className="date">{formatDate(date)}</span>}

        <div className="basic-information">
          <h4>{title}</h4>
        </div>

        {intro && <div className="resource-introduction tk-neue" dangerouslySetInnerHTML={{ __html: intro }} />}

        <ReactSVG src={arrowIcon} className="btn-img" />
        <div className="custom-btn custom-btn-primary">Read and download</div>
      </Link>
    </article>
  );
};

export default ResourceCard;
