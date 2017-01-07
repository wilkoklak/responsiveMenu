# responsiveMenu
This is a CSS3 file for responsive menu for your website.
It changes it's behaviour accordingly to screen resolution.

## How to use?


You need to add ``<meta>`` tag for viewport info:
``` html
<head>
	<meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>
```
Make a reference to ``responsive-menu-bundle.min.css`` inside your ``<head>>`` tag
``` html
<head>
	<link rel='stylesheet' href='css/responsive-menu-bundle.min.css'>
</head>
```
I also suggest using FontAwesome icons
``` html
<head>
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
</head>
```
Next step is to create a menu.
``` html
<div class='r-menu r-menu-light'>
	<div class='r-menu-panel'>
		<span class='fa fa-navicon' onclick='toggleMenu(this.parentNode.parentNode)'></span>
	</div>
	<ul class='r-menu-list'>
		<li><a href='#'>Link 1</a></li>
		<li><a href='#'>Link 2</a></li>
		<li><a href='#'>Link 3</a></li>
		<li><a href='#'>Link 4</a></li>
	</ul>
</div>
```
The last step is to create a function that will toggle the menu on small screens.
Since it's only a CSS base, I didn't want to enforce a method.

This is an example that works in all browsers, IE10 and newer:
``` js
function toggleMenu(elem) {
	var ul = elem.querySelector('.r-menu-list');
	if(ul.classList.toggle) { // less work for browser which support toggle
		ul.classList.toggle('slide-down');
	} else { // IE workaround...
		if(ul.classList.contains('slide-down')) {
			ul.classList.remove('slide-down');
		} else {
			ul.classList.add('slide-down');
		}
	}
}
```

See [``demo.htm``](demo.htm) for a reference

## Classes
- ``.r-menu`` - this is a class that the main container should have
- ``.r-menu-list`` - this is the ``<ul>`` tag of menu
- ``.r-menu-panel`` - you need this, mobile gets bugged without it
- ``.r-menu-[theme name]`` - this class sets a theme for menu. See [Theming](#theming) for more

## Responsiveness
This CSS uses 480px as a barrier for behaviour of menu.
When resolution is lower than 480px there will be a "hamburger"
which toggles the menu list.
If the resolution is higher than 480px it will behave in a standard way.

Edit ``$break`` variable in source files inside ``src`` or edit compiled ``*.css`` inside ``dist`` if you want to change it.

## Theming
You can choose a theme for menu. There are currently four themes:
- light
- dark
- blue
- red

``r-menu.css`` is a base, without colors. Each theme has a
separate file with proper name (for ex.``r-menu-dark.css``).

If you want to use a theme, you have to add a reference to proper file inside your ``<head>``

You can also use ``r-menu-bundle.css`` which contains the base skeleton and all themes.

To apply a theme on menu, you have to add a corresponding class:
``` html
<div class='r-menu r-menu-dark'>
	...
</div>
```
