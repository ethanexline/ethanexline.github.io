---
layout: post
title: I don't know what makes a good landing page
description: I'm hoping weirdness translates to eccentric talent
summary: Creativity or insanity?
tags: coding css javascript design learning
---

##### Let's find some direction.

What better to address as a first topic for a dumb programming blog than documenting my creative process for making a fun landing page?

If there's somebody who is definitively qualified to say whether or not coding could be considered a _creative_ practice, it certainly ain't me. Regardless of one's position on that debate, facing the issue of making an interesting, purposeful landing page for my site is demanding a creative approach. I want it to have some absurdity and humor, and linger in one's head, but it probably also needs to be a showcase, somehow, for my ability to make an interesting, modern, responsive, interactive website. The former is easy and fun, but the latter has to be the primary goal (duh).

I write some music in my free time, and I have found 2 methods to force creativity out of myself, especially in the face of the types of feelings that I felt earlier today: where do I start, too many options, ***what do employers even dang want to see??*** 
These 2 simple principles are:
- create rules, stipulations, and boundaries, even if they're completely meaningless, to make your pool of options smaller
- sometimes just a subversion of an established, already-done idea can be a compelling place to start

There's this assumption I've made in my life (you may have as well) that absolute freedom -> absolute creativity. In practice, however, scoping and reining in a creative project with rules lifts off a suffocating burden that often snuffs out the spark to pursue the project. I've fallen victim to this so many times - I'll simply _"I want to do this cool thing, but first I gotta choose when, and how, with what technology, using which resources etc. etc."_ a given project into oblivion. And to the second point, how many games (if you play games) could you list off the top of your head that are fundamentally just subtle subversions of, for example, the Metroid series? Without using Google I'll do it: Hollow Knight, Axiom Verge, the Castlevania series, Steamworld Dig, Megaman(?? definitely debatable but Samus did the arm cannon shtick first)... And a huge number of compelling games utilize that same basic gameplay loop that Metroid popularized where you:
1. Wander and kill things
2. Encounter impenetrable barrier to wandering
3. Wander elsewhere
4. Find big thing, kill it, receive impenetrable-barrier-breaker&trade;
5. Navigate back to barrier and surpass it with new toy
6. Repeat.

Which is the long way of saying that these are pretty well-established methods of creating things. There are certainly others, but these are the ones I come back to.

---


Utilizing these techniques, I decided upon a basic thesis for the design of my landing page: I try to subvert the aesthetic of old windows OS and implement some sort of toggle that lets you change the display from Windows 98 to Windows XP to Bootstrap, and make sure it looks nice on desktop and mobile. I was inspired by a couple of **really** nice recent internet finds:

[dayjob.work](https://dayjob.work/) - This agency's work is so dang cool and it drips with personality, and obviously I won't be able to commit to this aesthetic even close to this well - like, you can even play the first Doom game right there on the site. That's commitment.

[XP.css and 98.css](https://botoxparty.github.io/XP.css/) - This a github project that allows you to link in some plain CSS files and, using their classes, have elements that  faithfully recreate buttons, windows, and layouts from Windows 98 and XP. These are such fun projects (and they make my design work substantially easier; the first thing my Java professor back in college taught us was "don't recreate the wheel"!)

The hardest parts of what I accomplished today were making convincing background images that are faithful to those respective eras without infringing on Microsoft's copyrights (by editing the famous ones in completely absurd ways) and building a toggle in Javascript to change between them at will. It's kind of a compelling subversion of the modern design paradigm of always including a toggle for "light" vs "dark" mode, right? Here's the script I built (who knew you could assign CSS classes to link tags??):
```javascript
{
    function toggleTheme() {
        var theme = document.getElementsByClassName('themeChanger');
        var bodyPic = document.getElementsByTagName('body');
        var styleChanger = document.getElementById('styleRange');

        // Change the value of media attribute 
        // to change the css sheet active.
        if (styleChanger.value == '1') {
            theme[0].setAttribute('media', 'none');
            theme[1].setAttribute('media', '');
            theme[2].setAttribute('media', 'none');
            bodyPic[0].setAttribute('style', "font-family: Tahoma, sans-serif; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-size: 100% 100%; background-color: white; background-image: url('assets/images/win98.png');");
        } 
        else if (styleChanger.value == '2') {
            theme[1].setAttribute('media', 'none');
            theme[0].setAttribute('media', '');
            theme[2].setAttribute('media', 'none');
            bodyPic[0].setAttribute('style', "font-family: 'Franklin Gothic', sans-serif; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-size: 100% 100%; background-color: white; background-image: url('assets/images/bliss.jpg');");
        }
        else {
            theme[2].setAttribute('media', '');
            theme[0].setAttribute('media', 'none');
            theme[1].setAttribute('media', 'none');
            bodyPic[0].setAttribute('style', "font-family: sans-serif; background-color: azure;");
        }
    }
}
```
The background pictures I ended up making are pretty hideous, they may change. But the little toggler works! Now I just have to figure out 1. what I actually want to present, and 2. how I'm gonna present it in the context of my design thesis. What's nice is that I should be able to design the layouts for all three styles at the same time, although I'm not so sure about the Bootstrap portion.

I'll start worrying about that tommorow since I spent my whole afternoon making this post! 😅
