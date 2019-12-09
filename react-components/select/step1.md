Create a basic select component.

1) **Navigate to the `src` folder and open `src/App.js`{{open}}**

2) **Copy the code into the App.js file to set up the structure of the select component.**

<pre class="file" data-filename="App.js" data-target="replace">
import React from &quot;react&quot;;
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
          placeholderText="Select a state"
        &gt;
          (Add options here)
        &lt;/Select&gt;
      &lt;/React.Fragment&gt;
    );
  }
};
export default App;
</pre>

Once the preview reloads, it should look like this:
<img src="select/assets/basic-select.png" alt="basic select" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
