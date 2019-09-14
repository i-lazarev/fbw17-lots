# Bootstrap - Exercise #7 - The Copy Cat

Sometimes we just want to start our page from an already matching template.

We can use bootstrap examples for that.

## Instructions

### Pick the template code

- Make a copy of your starter template. Call it bootstrap-template-test.html
- On the bootstrap page: Go to tab "Examples"
- Click on any of the examples
- Right-click on the page and select "View source"
- Select & Copy all code by CTRL+A followed by CTRL+C
- Paste the code into the body of your bootstrap-template-test.html
- Keep the source code page open. We will need it again...

### Fix the broken links

- View the page
  - The bootstrap files are not loaded => because all links to bootstrap in the HTML are relative. o the browser does not find these resources.
- Add the following line within your head section to fix it:  `<base href="https://getbootstrap.com">`. Now you make all relative links pointing to bootstrap again
- Watch for custom CSS stylesheet linked like so `<link href="album.css" >`. It should look much better. But not 1:1.
- Watch for a CSS file in the head that does not start with a slash and is just referenced by its time. This link is not relative to the domain. It is relative to the current folder
- View the source code of the original page again. Click on the link. Now you get the full url of the CSS file in the address bar of the browser. Copy this full url and paste it into your local file instead of the filename.
- View your page again. Now it should look like the original

### Reponsivity test

- Go into the Chrome Dev Tools (either right-click "Inspect" on any element or go to your top menu: Tools > Developer tools)
- Shrink and expand the view (emulating mobile and desktop view)
- Watch if the responsivity works

Congratulations. You can you can always start any bootstrap page with a boilerplate without the need to reinvent the wheel all the time.
