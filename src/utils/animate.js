import { animateScroll } from "./animateScroll";

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 1500 }) => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // if the reference is id
  if (id) {
    const element = document.getElementById(id);

    if (!element) {
      // log error if the reference passed is invalid
      console.error(`Element with id "${id}" not found.`);
      return;
    }

    animateScroll({
      // target position is the elements offsetTop
      targetPosition: getElementPosition(element),
      initialPosition,
      duration,
    });
  }
};
