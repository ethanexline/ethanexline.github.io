---
layout: post
title: Abandon All Hope, Ye Who Want to Implement Comments
description: It's funny cause it's very possible nobody will ever comment on this blog
summary: The labor pangs of implementing Staticman Comments
tags: coding humour updates design learning
minute: 6
---

##### I'm begging you, please just make a comment to make me feel better.

When I started this blog, like, a week ago, I chose to take the simplest route for implementing a comment system, which is Disqus. You just gotta stick a `comments: true` in the front matter of the post and cram their cheeky little `UNIVERSAL EMBED CODE` at the end of your post template. Certainly not rocket science (not to mention there is a free tier, and I'm a miserly cad who ain't gonna pay for ***nothing***), so for the purposes of quickly building and launching a blog, not too bad, right?

### SPOILER: there is a caveat.

Of course, a company's gotta pay their employees somehow - so how does Disqus do it? Well, the same way every other internet-services company does - serving ads. In between the comments, _within_ the comments, in the Recommendations (I don't even know what this is) - looking at their sample gives a good idea of the type of saturation you'll be dealing with: ![Don't you love comments sections that look like this?](/assets/images/ads.png "Don't you love comments sections that look like this?")

I can't speak for anybody else, but a blog that bombards you with ads is, best case scenario, an absolute sensory overload, and worst case scenario, frustrating to the point of driving me away from the site. Now, it may be a bit of an exaggeration to call what Disqus would do "_bombardment_", but I've just had a thing recently where I just can't stand the feeling of being **sold** to. Ever since I set up a pihole on my apartment's network for my [Raspberry Pi](https://www.raspberrypi.org/) class back in college, I've lost tolerance for advertisements, and it has progressed to a point where, if at any point I feel like a piece of media is trying to convince me to spend money for any reason, I get **angry**. 

For these reasons, paired with my determination to not spend any money on this site (you can pay Disqus to not serve ads) and the fact that I was too lazy to research other "plug-and-play"-type solutions for implementing comments, I determined to go the route of an alternate solution I had encountered that piqued my interest: **[Staticman](https://staticman.net/)**.

___

The elevator pitch for Staticman is that it enables one to implement user-generated content in the context of a static site without having to think about heavier-duty things like databases and back-end code (neither of which play well with Github Pages). It's a fantastic solution for this, a Jekyll-based Github pages blog that I want to implement native comments on, at least in theory.

### SPOILER #2: this was much harder than I thought it would be.

I thought: "I've found a few tutorials, this has been done before, surely it can't be _that_ hard to implement!" Famous last words. An insight that I'm having in this moment: software developers have really lame last words.

I'll spare the internet the indignity of adding to the 10 bazillion tutorials for implementing Staticman comments - it has been pretty extensively covered and frankly, done more justice already than I would be capable of - but I will regale some of the most entertaining things that tripped me up for embarassing amounts of time.

#### ReCaptcha Styling, or The Least Cool Path to a Nervous Breakdown

I spent literal days trying to figure this bit out. Somehow, longer any other individual problem I encountered. I came within milimeters, nay, a _hair's breadth_ of giving up trying to solve this problem before I had my breakthrough. Google's docs for V2 checkbox reCaptcha are doodoo, go figure, and somehow even StackOverflow didn't have a single example of somebody encountering or solving my problem. By the end, I was just desperately throwing Javascript at the wall and praying something stuck. I'll describe the particular problem I was having.

The site template I've riffed on here (see the footer of the blog for link to it, thank you [P0WEX](https://github.com/P0WEX)) has a nifty lil dark mode/light mode toggle up in the upper right, and I knew the reCaptcha widget also has a dark and light mode. Naturally, I wanted the reCaptcha in the comment form to match the mode of the page. It's the perfect example of the problem that is simple on paper and ridiculous from a code perspective.

Google's reCaptcha API forces you to make a decision on its theme right as it's rendered and disallows you from rendering the widget a second time between full page reloads. That is to say, **there is absolutely NO way to rerender the widget with a new theme without a page refresh**. You can't use the API and say `grecaptcha.reset(widgetID);` (at least, this doesn't solve _my_ problem) forget any solution that manually empties the widget container like `while ($("#widgetID").firstChild) { $("#widgetID").removeChild($("#widgetID").lastChild); }'` cause Google's API will just remember the thing was rendered and stop you - I tried so many things, I tried using Promises, I tried using async functions, I tried asking real nice, I tried everything.

My last-ditch effort was digging into the widget itself to see if anything inspired a new solution, when I looked closely at the `src` of the iframe that the widget produced and saw in the URL a `&theme=dark`. For funsies I changed that to `&theme=light` and I nearly shed joyful, salty tears when I saw that, in real time, without rendering a second time, the theme instantly changed. I immediately knew what to do. I chose the "explicit rendering" option for the widget and added the `async defer` to the end of the `<script>` tag that linked to the reCaptcha API, and changed my `ModeSwitcher()` function to look like this:

    function modeSwitcher() {
      let currentMode = document.documentElement.getAttribute('data-theme');

      if (currentMode === "dark") {
        setTheme('light');
        if (document.getElementById("reCaptcha") !== null) {
          document.getElementsByTagName("iframe")[0].setAttribute('src', document.getElementsByTagName("iframe")[0].getAttribute('src').replace('dark', 'light'));
        }
      } else {
        setTheme('dark');
        if (document.getElementById("reCaptcha") !== null) {
          document.getElementsByTagName("iframe")[0].setAttribute('src', document.getElementsByTagName("iframe")[0].getAttribute('src').replace('light', 'dark'));
        }
      }
    }

## Hallelujah, baybeeee

It worked. I sincerely hope that someday, somebody will see this code and feel the same relief I felt when discovering it. The fact that that will probably never happen is sad.