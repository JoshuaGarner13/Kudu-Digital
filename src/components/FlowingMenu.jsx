import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import '../styles/FlowingMenu.css';

// Parent component remains the same as before
function FlowingMenu({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem 
            key={idx} 
            index={idx}
            isActive={activeIndex === idx}
            onItemClick={handleItemClick}
            {...item} 
          />
        ))}
      </nav>
    </div>
  );
}

// Child component with updated logic
function MenuItem({ link, text, image, index, isActive, onItemClick }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const navigate = useNavigate(); // Get the navigate function

  const animationDefaults = { duration: 0.6, ease: 'expo' };
  
  // Helper functions (no changes needed)
  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };
  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2; const yDiff = y - y2; return xDiff * xDiff + yDiff * yDiff;
  };
  const showMarquee = (edge) => {
    gsap.timeline({ defaults: animationDefaults }).set(marqueeRef.current, {y: edge === 'top' ? '-101%' : '101%'}, 0).set(marqueeInnerRef.current, {y: edge === 'top' ? '101%' : '-101%'}, 0).to([marqueeRef.current, marqueeInnerRef.current], {y: '0%'}, 0);
  };
  const hideMarquee = (edge) => {
    gsap.timeline({ defaults: animationDefaults }).to(marqueeRef.current, {y: edge === 'top' ? '-101%' : '101%'}, 0).to(marqueeInnerRef.current, {y: edge === 'top' ? '101%' : '-101%'}, 0);
  };

  // Hover handlers for desktop (no changes needed)
  const handleMouseEnter = (ev) => {
    if (window.innerWidth <= 768) return;
    const rect = itemRef.current.getBoundingClientRect(); const x = ev.clientX - rect.left; const y = ev.clientY - rect.top;
    showMarquee(findClosestEdge(x, y, rect.width, rect.height));
  };
  const handleMouseLeave = (ev) => {
    if (window.innerWidth <= 768) return;
    const rect = itemRef.current.getBoundingClientRect(); const x = ev.clientX - rect.left; const y = ev.clientY - rect.top;
    hideMarquee(findClosestEdge(x, y, rect.width, rect.height));
  };
  
  // UPDATED: Click handler for both mobile and desktop
  const handleClick = (ev) => {
    // For desktop, we let the default <a> tag navigation happen, so we do nothing.
    if (window.innerWidth > 768) {
      return;
    }

    // On mobile, we always prevent the default link navigation to control it ourselves.
    ev.preventDefault();

    // If the item is already active AND has a valid link, navigate to that page.
    if (isActive && link) {
      navigate(link);
    } else {
      // Otherwise, just toggle the marquee effect.
      onItemClick(index);
    }
  };
  
  // useEffect for mobile animation (no changes needed)
  useEffect(() => {
    if (window.innerWidth > 768) return;
    if (isActive) {
      showMarquee('bottom');
    } else {
      hideMarquee('bottom');
    }
  }, [isActive]);


  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}><span>{text}</span><div className="marquee__img" style={{ backgroundImage: `url(${image})` }}/></React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap"><div className="marquee__inner" aria-hidden="true">{repeatedMarqueeContent}</div></div>
      </div>
    </div>
  );
}

export default FlowingMenu;