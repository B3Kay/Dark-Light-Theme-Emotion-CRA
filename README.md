# Dark / Light Theme with Emotion | Tutorial

## About CSS in JS & Emotion
This tutorial introduces the concepts of CSS in JS, Emotion, and creating a dynamic Dark/Light theme for your React application. Here's a quick overview of the key topics covered:

### CSS in JS

Benefits:
- **Power of JS / Dynamic Styling:** Leverage the flexibility and dynamism of JavaScript for styling.
- **Code Sharing:** Simplify component styling and share styles more efficiently.
- **Component Thinking - No More Stylesheets:** Move away from traditional stylesheets and embrace a component-centric approach.
- **Isolation (Unique Generated Classnames):** Ensure style encapsulation with automatically generated unique classnames.
- **Dead Code Elimination:** Optimize your application by eliminating unused styles.

### Emotion

Emotion is a CSS-in-JS library designed to handle styles in JavaScript. It offers a seamless developer experience and includes support for TypeScript, theming, and more out of the box.

### Theming in Your App

Theming involves defining an object that specifies how your webpage should behave. This could include colors, sizes, and styles for different types of elements. For example, headers could be defined to be red, large, and italicized.

The goal is to easily switch themes, altering the entire appearance of your app without making code changes to the HTML or CSS.

### Two Ways of Writing Emotion

![Inline Style](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA/assets/23380102/933b9f20-9451-4f91-aa82-a625c6e62967) or ![Styled Component](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA/assets/23380102/c0a3275f-a5e9-467c-9a22-dab2711ecae7)

#### 1. Add a Theme Provider to Your Root Tree and Use the `css` Prop

![ThemeProvider with CSS Prop](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA/assets/23380102/a10f843e-602f-4376-82b7-c97dd41d1fee)

#### 2. Add a Theme Provider and Use `styled.div` to Decorate Your Theme Props

![ThemeProvider with styled.div](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA/assets/23380102/6056a3b1-6183-45f8-bc24-2b4dd9c42c0f)

#### 3. Add `useTheme` Hook to Easily Provide Theme to a Component

![useTheme Hook](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA/assets/23380102/de0e5245-2993-4262-bbe0-18caae5a5fb1)

## Additional Resources

Explore further and connect with the developer through various platforms:

- **Live Demo:** Check out the live demo of the Dark/Light Theme application at [LightDarkTheme.netlify.app](https://lightdarktheme.netlify.app/)

- **GitHub Repository:** Access the project's source code on GitHub at [GitHub.com/B3Kay/Dark-Light-Theme-Emotion-CRA](https://github.com/B3Kay/Dark-Light-Theme-Emotion-CRA)

- **CodeSandbox:** Experiment with the code in an interactive environment on CodeSandbox. Visit [CodeSandbox.io/s/github/B3Kay/Dark-Light-Theme-Emotion-CRA/tree/main/](https://codesandbox.io/s/github/B3Kay/Dark-Light-Theme-Emotion-CRA/tree/main/)

- **LinkedIn Profile:** Connect with the developer on LinkedIn at [LinkedIn.com/in/benjik](https://www.linkedin.com/in/benjik)

- **Emotion Library:** Learn more about the Emotion library at [Emotion.sh](https://emotion.sh/)

- **Squeed:** Explore Squeed's services and expertise at [Squeed.com](https://squeed.com/)

These resources provide a comprehensive view of the project, additional interactive platforms, the developer's professional network, and relevant external tools and libraries.

## Getting Started

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and lint errors will be displayed in the console.
