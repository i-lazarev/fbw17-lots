# Bootstrap - Exercise #7 - The Copy Cat

Some times we just want to start our page from an already matching template.

We can use bootstrap examples for that.

## Instructions

### First demo

- On the bootstrap page: Go to tab "Examples"
- Click on any of the examples
- Right-click on the page and select "View source"
- Copy all code within the body section
- Paste the code into the body of your bootstrap-test.html

### Fix the broken links

- View the page
  - The bootstrap files are not loaded => all links are relative
- Add the following line within your head section to fix it:  `<base href="https://getbootstrap.com">`
- Watch for custom CSS stylesheet linked like so `<link href="album.css" >`. The file album.css is relative not to the domain, it is relative to the current url. Here append the full URL upfront (without the filename)
- View the page again

### Reponsivity test

- Go into the Chrome Dev Tools (either right-click "Inspect" on any element or go to your top menu: Tools > Developer tools)
- Shrink and expand the view (emulating mobile and desktop view)
- Watch the responsivity
