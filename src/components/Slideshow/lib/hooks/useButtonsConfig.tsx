import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { Slide, Button } from "../../types/Slideshow.types";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

export const useButtonsConfig = (
  slides: Slide[],
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>,
  isAutoplay: boolean,
  setIsAutoplay: Dispatch<SetStateAction<boolean>>
) => {
  const onPrevClick = () => {
    setCurrentSlideIndex((prevIndex) => {
      if (prevIndex === 0) {
        return slides.length - 1;
      }

      return prevIndex - 1;
    });
  };

  const onPlayClick = () => {
    setIsAutoplay(true);
  };

  const onStopClick = () => {
    setIsAutoplay(false);
  };

  const onNextClick = () => {
    setCurrentSlideIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  };

  const buttonsConfig: Button[] = [
    {
      id: uuidv4(),
      text: "prev",
      action: onPrevClick,
      disabled: false,
      icon: <GrCaretPrevious />,
    },
    {
      id: uuidv4(),
      text: "play",
      action: onPlayClick,
      disabled: isAutoplay === true,
      icon: <CiPlay1 />,
    },
    {
      id: uuidv4(),
      text: "stop",
      action: onStopClick,
      disabled: isAutoplay === false,
      icon: <CiPause1 />,
    },
    {
      id: uuidv4(),
      text: "next",
      action: onNextClick,
      disabled: false,
      icon: <GrCaretNext />,
    },
  ];

  return { buttonsConfig };
};
