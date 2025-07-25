import React, { forwardRef } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import './inicio.css';

const TwoColumnCard = forwardRef(({
  label,
  title,
  subtitle,
  buttonText,
  buttonVariant = 'warning',
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
      <a href="#" className="two-col-card-title-link">
        <h2 className="two-col-card-title mb-3">{title}</h2>
      </a>
      {subtitle && <p className="two-col-card-subtitle mb-3">{subtitle}</p>}
      {buttonText && (
        <Button variant={buttonVariant} className="two-col-card-button">
          {buttonText} &gt;
        </Button>
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