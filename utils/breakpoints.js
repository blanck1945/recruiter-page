import { css } from 'styled-components';

/**
 * laptop: number
 * ipad: number
 * mobile: number
 */
export const Queries = {
  laptop: 1440,
  ipad: 1028,
  mobile: 750,
};

/**
 *
 * @param {*} cssProp the CSS property to apply to the breakpoints
 * @param {*} cssPropUnits the units of the CSS property (can set equal to "" and apply units to values directly)
 * @param {*} values array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
 * @param {*} mediaQueryType media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
 * @returns
 */
export const breakpoints = (
  cssProp = 'padding', // the CSS property to apply to the breakpoints
  cssPropUnits = 'rem', // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = 'max-width' // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [Object.keys(value)[0], Object.values(value)[0]];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, '');
  return css([breakpointProps]);
};

export const displayBreakpoints = (
  cssProp,
  cssPropValue,
  screenBreakpoint,
  mediaQueryType = 'max-width'
) => {
  const displayPoints = `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropValue}
    }
    `;
  return css([displayPoints]);
};

/*
 Formato
 ${breakpoints("height", "rem", [
    { 1920: 20 },
    { 1440: 16 },
    { 780: 12 },
    { 550: 8 },
  ])} 
*/
