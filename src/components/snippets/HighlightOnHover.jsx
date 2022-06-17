import React, { useState, useRef } from "react";

import styled from "styled-components";

const HoverHighlightContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: fit-content;
  height: 100px;

  align-items: center;

  gap: 20px;
  padding: 16px 24px;

  border-radius: 4px;

  background-color: #1c1c1c;

  #nav-wrapper {
    position: relative;

    display: flex;
    flex-direction: row;

    justify-content: center;

    width: fit-content;

    gap: 20px;
  }

  #highlight {
    position: absolute;

    top: 9px;
    left: 0;

    height: 32px;

    border-radius: 4px;

    background: hsl(0deg 0% 14%);

    transition: 0.15s ease;
    transition-property: width, transform, opacity;
  }

  a {
    position: relative;

    display: inline-block;

    padding: 16px 12px;

    font-size: 14px;
    text-decoration: none;

    cursor: pointer;

    transition: color 250ms;

    color: hsl(0 0% 43.5%);

    &:hover {
      color: hsl(0 0% 87%);
    }
  }
`;

function HoverHighlight() {
  const [itemBoundingBox, setItemBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(null);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const positionHighlight = (e, item) => {
    setItemBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedItem);
    setHighlightedItem(item);
  };

  const resetHighlight = () => setHighlightedItem(null);

  const highlightStyles = {};

  if (itemBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedItem ? 1 : 0;
    highlightStyles.width = `${itemBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      itemBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <HoverHighlightContainer>
      <div ref={wrapperRef} onMouseLeave={resetHighlight} id="nav-wrapper">
        <div id="highlight" ref={highlightRef} style={highlightStyles}></div>
        <a onMouseOver={(e) => positionHighlight(e, e.target)}>Home</a>
        <a onMouseOver={(e) => positionHighlight(e, e.target)}>About</a>
      </div>
    </HoverHighlightContainer>
  );
}

export default HoverHighlight;
