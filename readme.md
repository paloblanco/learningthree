# Learning how to use threejs

## Summary
This is a repo where I am following along with Lewy Blue's online book, [https://discoverthreejs.com/]. I am making changes so I can develop on my own machine (using VScode) and I can bundle my application using Parcel. The directions below can help you to set up your own development environment for making threejs apps and games!

## Background
I am using this repo to track my progress as I learn about threejs. I am using an excellent guide written about threejs by Lewy Blue which can be found here: [https://discoverthreejs.com/]

I am mostly interested in threejs for two things.

1. I would like to make 3d figures and plots to accompany reporting that I build in my day job as a data scientist. I have above-average competency in pyhton but my javascript is rather poor. I have found python's 3d capabilities to be lacking.
2. I also make video games! Most of them are maintained on [gamejolt](https://gamejolt.com/@paloblancogames). I really enjoy the coding aspect of games, so I am slowly moving away from dedicated game engines and into pure javascript. I frequently post about my games on twitter if you are interested: [https://twitter.com/paloblancogames]

## Goal of this repo

I want to be able to make standalone threejs webapps and client apps (probably with something like electron). As such, I am focused on using an IDE and making sure that I can package my application. As such, my coding here will deviate a bit from Lewy's examples as I learn about javascript bundling technologies. Again, I want to be able to bundle these apps (or games) and distribute them as I wish, so I am focused on using my own environment and packaging my apps from an early stage.

## How to set up your develpoment environment to follow along with me.

If you are looking to threejs for standalone game development, you may want to follow along with me. If you are COMPLETELY new to programming, you may have a better experience learning something like [pico8](https://www.lexaloffle.com/pico-8.php), which provides you with a lot of convenience but still forces you to code most of the application or game yourself.

Still wish to follow along? OK.

### What you need before pulling this repo

1. A code editor. I am a big fan of VScode by MS, and if you have no idea what you are doing here, I recommend you just download the [user version of VScode](https://code.visualstudio.com/Download) since it's a pretty nice editor. I won't be discussing other editors, but I know lots of people like Sublime and Atom.
2. [Node](https://nodejs.org/en/). Node is a program that is a little difficult to describe if you are not REALLY into programming, but here are some things about it:
    1. There's no real GUI for node - you just call it from the commandline and it does... stuff.
    2. What kind of stuff? At the most basic level, node lets you write scripts or full-fledged programs in javascript and then run them on your machine. Lots of web developers use node because it means they can write entire webapps, both the stuff in your browser and the stuff on the servers, all in javascript.
    3. Node comes with lots of convenience features, and npm, node package manager, will be the big one we use. This is a part of node which makes it easy to download and install extra packages for your apps, like threejs!
3. Back to requirements. If you have an editor and you have installed node, do the following:
    1. Create a folder where you plan on working.
    2. Open a command prompt in that folder and do the following:
```
npm init -y  (note: this creates a npm project in this folder)
npm install parcel-bundler (note: this install parcel here, which will allow you to "package" your js)
npm install three (this puts threejs in your environment)
```

OK! you have everything you need to get started!

### using this repo
You can just download all of the files in this repo to your work folder. I am not going to explain git (unless I get a lot of requests!) because it is difficult to explain and I will not do it justice. Anyways, once all of the files are in the folder where you set up your environment, just pull up a command prompt and type:
```
parcel index.html
```
This command will start a server on your machine, compile all of your javascript and css correctly, and then give you a link to check it all out! It even updates all of your files every time you modify one, so you can live code on your application.

Happy coding!

-Palo Blanco
