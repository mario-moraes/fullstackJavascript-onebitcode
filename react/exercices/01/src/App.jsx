export default function App() {
  return (
    <div className="app">
      <img src="/react.png" alt="react logo" />
      <h1>Hello, World</h1>
      <p>Ract is the most common library for web interfaces and development</p>
      <div>
        <button>Learn React</button>
        <button>API reference</button>
        <hr />
        <h2>Create Components</h2>
        <p>Facebook developed a "Create React Application" with everything you need to build a React app. It is a a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.The Create React App uses ESLint to test and warn about mistakes in the code.</p>
        <p>But nowdays, Vite is the most used tool for creating react projects due to being faster and easier to setup.</p>
        <p>Unlike CRA or a bundler-based build setup, Vite does not build the entire application before serving. It divides the application modules into two categories: dependencies and source code.</p>
      </div>
      <h2>Use tags to write components</h2>
      <p>React components are Javascript functions. The markup sintax used is called JSX.</p>
      <hr />
      <h3>Next Steps:</h3>
      <ul>
        <li>Dinamic data on JSX</li>
        <li>Creating new components</li>
        <li>Styled components</li>
        <li>Reutilization of components</li>
        <li>Props and childrens</li>
        <li>Javascript events</li>
      </ul>
    </div>
  )
}