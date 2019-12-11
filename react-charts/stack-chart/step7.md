Change the stack chart theme color.

1) <strong>Make sure the `App.js` file is still open.</strong>

2) <strong>Locate the `<Chart>` component and add a property to change the theme.</strong>

The `themeColor` property specifies the theme color. Some valid values are `ChartThemeColor.blue`,  `ChartThemeColor.green`, or `ChartThemeColor.multi`. It should look like the following:

<pre class="file" data-target="clipboard">
themeColor={ChartThemeColor.green}
</pre>

Once the preview reloads, it should look like this:
<img src="stack-chart/assets/theme.png" alt="Chart with theme color" style="box-shadow: rgba(3, 3, 3, 0.2) 0px 1.25px 2.5px 0px;" />
