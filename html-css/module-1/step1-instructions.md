
In PatternFly, components follow the principles of atoms, molecules, and organisms. As described by Brad Frost in Atomic Design, “Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.”

## Workshop: Add a button component

The button is an example of an atom, as it cannot be broken down into further parts. Its modular in the fact that it can be repeated over and over again by reusing the code. <strong> Let's add a button component.</strong>

1) <strong>Copy code into the index.html file.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for a Button component to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;button class=&quot;pf-c-button pf-m-primary&quot; type=&quot;button&quot;&gt;
  Primary
&lt;/button&gt;
</pre>

2) You should see one Button component. <strong>Lets add one more Button component.</strong>

Click the <strong>Copy to Editor</strong> button below to add html for two Button components to the `index.html` file.

<pre class="file" data-filename="index.html" data-target="replace">
&lt;button class=&quot;pf-c-button pf-m-primary&quot; type=&quot;button&quot;&gt;
  Primary
&lt;/button&gt;
&lt;button class=&quot;pf-c-button pf-m-primary&quot; type=&quot;button&quot;&gt;
  Primary
&lt;/button&gt;
</pre>

You can begin to see that these are modular atoms being added to the workspace!
