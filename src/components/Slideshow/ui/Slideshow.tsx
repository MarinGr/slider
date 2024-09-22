import { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useButtonsConfig } from "../lib/hooks/useButtonsConfig";
import { theme } from "../../../App.theme";
import {
  StyledSlideshowContainer,
  StyledSlidesWrapper,
  StyledSlide,
  StyledToolbar,
  StyledButton,
} from "./Slideshow.styles";

const DELAY = 2000;

export const Slideshow = () => {
  const slides = useMemo(
    () => [
      { id: uuidv4(), text: "slide 1", color: theme.slide1Color },
      { id: uuidv4(), text: "slide 2", color: theme.slide2Color },
      { id: uuidv4(), text: "slide 3", color: theme.slide3Color },
      { id: uuidv4(), text: "slide 4", color: theme.slide4Color },
      { id: uuidv4(), text: "slide 5", color: theme.slide5Color },
    ],
    []
  );

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);

  const timeoutRef = useRef(0);

  const { buttonsConfig } = useButtonsConfig(
    slides,
    setCurrentSlideIndex,
    isAutoplay,
    setIsAutoplay
  );

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoplay) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
          ),
        DELAY
      );
    }

    return () => {
      resetTimeout();
    };
  }, [currentSlideIndex, isAutoplay, slides.length]);

  return (
    <StyledSlideshowContainer>
      <StyledSlidesWrapper currentSlideIndex={currentSlideIndex}>
        {slides.map((slide) => (
          <StyledSlide key={slide.id} style={{ backgroundColor: slide.color }}>
            {slide.text}
          </StyledSlide>
        ))}
      </StyledSlidesWrapper>

      <StyledToolbar>
        {buttonsConfig.map((button) => (
          <StyledButton
            key={button.id}
            aria-label={button.text}
            disabled={button.disabled}
            onClick={button.action}
          >
            {button.icon}
            {button.text}
          </StyledButton>
        ))}
      </StyledToolbar>
    </StyledSlideshowContainer>
  );
};
