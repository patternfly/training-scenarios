The PatternFly React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior. In this course, we're going to build a PatternFly select component together - starting with the single select variant, and then expanding the example using the typeahead select variant and adding some customization.

You are going to create a basic select component.

1) **Navigate to the `src` folder and open `src/App.js`{{open}}**

2) **Copy the following code into the App.js file, replacing all of the content in the file:**

<pre class="file" data-filename="App.js" data-target="replace">
import * as React from &quot;react&quot;;
import * as ReactDOM from &quot;react-dom&quot;;
import &quot;@patternfly/react-core/dist/styles/base.css&quot;;
import { Select, SelectOption } from &quot;@patternfly/react-core&quot;;
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        &lt;Select 
          onToggle={Function.prototype} 
          onSelect={Function.prototype} 
          selections={null} 
          isExpanded={false} 
          placeholderText="Select a state"&gt;
            (Add options here)
        &lt;/Select&gt;
      &lt;/React.Fragment&gt;
    );
  }
};
export default App;
</pre>

When Katacoda reloads you should see this...
//SCREENSHOT
