import styled from "styled-components";

export const StyledSlideshowContainer = styled.div`
  border-radius: 20px;
  max-width: 1440px;
  overflow: hidden;
`;

export const StyledSlidesWrapper = styled.div<{ currentSlideIndex: number }>`
  white-space: nowrap;
  transition: ease-in-out 0.8s;
  width: 800px;
  transform: ${(p) =>
    p.currentSlideIndex && `translateX(-${p.currentSlideIndex * 100}%)`};

  @media screen and (min-width: 720px) and (max-width: 960px) {
    width: 700px;
  }

  @media screen and (min-width: 480px) and (max-width: 720px) {
    width: 460px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }
`;

export const StyledSlide = styled.div`
  display: inline-flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media screen and (min-width: 720px) and (max-width: 960px) {
    height: 400px;
  }

  @media screen and (min-width: 480px) and (max-width: 720px) {
    height: 300px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 240px;
  }
`;

export const StyledToolbar = styled.div`
  width: 100%;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button<{
  disabled?: boolean;
}>`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  cursor: pointer;

  background-color: ${(p) =>
    p.disabled ? p.theme.disabledColor : p.theme.primaryColor};
  color: ${(p) => !p.disabled && p.theme.secondaryColor};

  &:hover {
    background-color: ${(p) => !p.disabled && p.theme.primaryColorHover};
    color: ${(p) => !p.disabled && p.theme.white};
    transition: ease-in-out 0.2s;
  }

  &:active {
    background-color: ${(p) => !p.disabled && p.theme.primaryColorActive};
    color: ${(p) => !p.disabled && p.theme.white};
    transition: ease-in-out 0.2s;
  }
`;
