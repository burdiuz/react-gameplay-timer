export const UPDATE_FONT_SIZE = 'updateFontSize';
export const UPDATE_FONT_COLOR = 'updateFontColor';
export const UPDATE_STYLE = 'updateStyle';

export const updateFontSize = (fontSize) => ({
  type: UPDATE_FONT_SIZE,
  fontSize,
});

export const updateFontColor = (color) => ({
  type: UPDATE_FONT_COLOR,
  color,
});

export const updateStyle = (style) => ({
  type: UPDATE_STYLE,
  style,
});
