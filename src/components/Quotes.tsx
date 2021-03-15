import styled from "@emotion/styled";
import { lightOrDark } from "../emotion";

type Quote = {
  quote: string;
  author: string;
};
type DarkAndLightQuotes = {
  dark: Quote[];
  light: Quote[];
};
const darkAndLightQuotes: DarkAndLightQuotes = {
  dark: [
    {
      quote:
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr.",
    },

    {
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },
    {
      quote:
        "Everyone is a moon, and has a dark side which he never shows to anybody.",
      author: "Mark Twain",
    },
    {
      quote:
        "I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.",
      author: "Friedrich Nietzsche",
    },
    {
      quote: "When it is dark enough, you can see the stars.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "We are all like the bright moon, we still have our darker side.",
      author: "Khalil Gibran",
    },
  ],
  light: [
    {
      quote:
        "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
      author: "Plato",
    },

    {
      quote:
        "There are darknesses in life and there are lights, and you are one of the lights, the light of all lights",
      author: "Bram Stoker, Dracula",
    },
    {
      quote:
        "Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance.",
      author: "Roy T. Bennett, The Light in the Heart",
    },
    {
      quote: "To shine your brightest light is to be who you truly are.",
      author: "Roy T. Bennett",
    },
    {
      quote:
        "May it be a light to you in dark places, when all other lights go out",
      author: "J.R.R. Tolkien, The Fellowship of the Ring",
    },
  ],
};

const getRandomQuote = (quotes: Quote[]): Quote =>
  quotes[Math.floor(Math.random() * quotes.length)];

export const getQuote = (type: lightOrDark): Quote => {
  const quotes = darkAndLightQuotes[type];
  const quote = getRandomQuote(quotes);
  return quote;
};

export const QuoteComponent = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-style: italic;
  width: 50%;
  height: 10rem;
  margin-right: 3rem;
  margin-left: 3rem;
  margin-bottom: 0.5rem;
`;

export const AuthorComponent = styled.p`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 1rem;
  margin-top: 0px;
  margin-bottom: 3rem;
`;
