const defaultText = {
  color: 'text',
  fontSize: "16px",
};

export const text = {
  primary: {
    ...defaultText,
  },
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
  },
  pokemon: {
    name: {
      ...defaultText,
      fontSize: "32px",
      color: "orange"
    }
  }
};
