---
title: Building a Portfolio with Gatsby and Typescript
date: '2019-06-29T00:01:00'
published: true
slug: gatsby-portfolio
layout: project
tags: ['javascript', 'typescript', 'node', 'gatsby', 'graphql']
category: Web
attachments:
 - './resume.pdf'
---

### Motivation
I created this portfolio after realizing that resumes were boring and didn't tell my employers what I wanted to say. Of course I still have a resume but I felt something creative might give me an edge.

### Technologies
The heart of this website is [Gatsby](https://gatsbyjs.com), a static site generator and framework on top of React. It allows a developer to create super fast static websites and still have all the power and modularity of React.

To allow to easier error checking (and because I wanted to learn) I chose to use [Typescript](https://www.typescriptlang.org) throughout this project rather than Javascript. Typescript allows for static typechecking to find errors before they become a problem.

I also used [Material UI](https://material-ui.com) to achieve a consistent look throughout the site. Having not used React in any form before, having some prebuilt components made the development process much smoother, and resulted in a cleaner overall look.

Because it's a static site, it can be hosted on Github Pages and is! The source code is available [here](https://github.com/nstromberg/portfolio).

### Learning
Almost everything in this project was new to me. I had never touched a frontend Javascript framwork before embarking on this adventure, I had never even written client-side javascript. My only Javascript experience was writing [AWS Lambdas in Node](/gea-lambda). Gatsby centers around GraphQL for data retrieval, which is a technology I had some experience in and really enjoy.
