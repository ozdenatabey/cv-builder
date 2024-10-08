import { colors } from "./colors";

export const headerColorList = colors.map((color) => `"bg-[${color.header}]"`);
export const primaryColorList = colors.map(
  (color) => `"bg-[${color.primary}]"`
);

export const themeColorListPrimary = colors.map(
  (color) => `"bg-${color.id}-primary"`
);
export const themeColorListHeader = colors.map(
  (color) => `"bg-${color.id}-header"`
);
export const themeColorListBase = colors.map(
  (color) => `"bg-${color.id}-base"`
);
export const themeColorListBorder = colors.map(
  (color) => `"bg-${color.id}-border"`
);

export const themeTextListPrimary = colors.map(
  (color) => `"text-${color.id}-primary"`
);
export const themeTextListHeader = colors.map(
  (color) => `"text-${color.id}-header"`
);
export const themeTextListBase = colors.map(
  (color) => `"text-${color.id}-base"`
);
export const themeTextListBorder = colors.map(
  (color) => `"text-${color.id}-border"`
);

export const themeBorderListPrimary = colors.map(
  (color) => `"border-${color.id}-primary"`
);
export const themeBorderListHeader = colors.map(
  (color) => `"border-${color.id}-header"`
);
export const themeBorderListBase = colors.map(
  (color) => `"border-${color.id}-base"`
);
export const themeBorderListBorder = colors.map(
  (color) => `"border-${color.id}-border"`
);

export const themeDecorationListPrimary = colors.map(
  (color) => `"decoration-${color.id}-primary"`
);
export const themeDecorationListHeader = colors.map(
  (color) => `"decoration-${color.id}-header"`
);
export const themeDecorationListBase = colors.map(
  (color) => `"decoration-${color.id}-base"`
);
export const themeDecorationListBorder = colors.map(
  (color) => `"decoration-${color.id}-border"`
);
