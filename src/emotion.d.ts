import "@emotion/react";

type lightOrDark = "light" | "dark";

declare module "@emotion/react" {
  export interface Theme {
    type: lightOrDark;
    color: {
      primary: string;
      contrast: string;
      text: string;
      contrastText: string;
      secondary: string;
      elevated: string;
      background: string;
    };
  }
}
