import React, { forwardRef } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './inicio.css';
import { Link } from 'react-router';

const TwoColumnCard = forwardRef(({
  label,
  title,
  subtitle,
  buttonText,
  buttonVariant = 'warning',
  buttonLink,
  leftBgColor,
  textColor = '#fff',
  imageUrl,
  imageAlt,
  direction = 'text-left',
  animationClass = ''
}, ref) => {
  const textContent = (
    <Col md={6} className="two-col-card-text-col d-flex flex-column justify-content-center align-items-start p-4" style={{ backgroundColor: leftBgColor, color: textColor }}>
      {label && <div className="two-col-card-label mb-2">{label}</div>}
      {/* Hacemos el título clickeable */}
      <Link to={buttonLink || '#'} className="text-decoration-none text-white">
        <h2 className="two-col-card-title mb-3">{title}</h2>
      </Link>
      {subtitle && <p className="two-col-card-subtitle mb-3">{subtitle}</p>}
      {buttonText && (
        <Link to={buttonLink || '#'} className="text-decoration-none">
          <Button variant={buttonVariant} className="two-col-card-button">
            {buttonText} &gt;
          </Button>
        </Link>
      )}
    </Col>
  );

  const imageContent = (
    <Col md={6} className="two-col-card-image-col">
      <div className="two-col-card-image-wrapper">
        <img src={imageUrl} alt={imageAlt} className="two-col-card-image" />
      </div>
    </Col>
  );

  return (
    <Card className={`two-col-card ${animationClass}`} ref={ref}>
      <Row className="g-0 h-100">
        {direction === 'text-left' ? (
          <>
            {textContent}
            {imageContent}
          </>
        ) : (
          <>
            {imageContent}
            {textContent}
          </>
        )}
      </Row>
    </Card>
  );
});

export default TwoColumnCard;