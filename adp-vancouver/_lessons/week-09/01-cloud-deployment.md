---
layout: lesson
title: Cloud Deployment
lesson_date: 2017-03-06
---

## Pre-work

Deploying applications "in the Cloud" is a fact of life for developers building internet connected software.
Over the next 2 days we'll learn about a number of Cloud Computing providers and how to start using them to deploy
Websites and Web Servers.

Before we dive in, have a look at this primer on Cloud Computing provided by Amazon Web Services,
the leading Cloud Computing provider today:

[What is Cloud Computing?](https://aws.amazon.com/what-is-cloud-computing/)


---

## Learning Objectives

We're not going to jump into AWS today. Instead we'll start from the simplest, and most convenient Cloud deployment tools.

- Define Cloud Computing
- Distinguish the differences between popular Cloud Hosting providers
- Deploy a static Website using `surge.sh`
- Deploy a Node / Express site using `now`
- Deploy a Meteor app using Meteor Galaxy
- Introduce SSH & review public / private key encryption
- Deploy a Node / Express / Mongo app using Heroku
- Install Ubuntu 16.04 on Digital Ocean
- Install Ubuntu 16.04 on AWS EC2
- Install Ubuntu 16.04 on Microsoft Azure

---

## Keywords

- Cloud ☁
- Virtual Machine
- Single Tenant
- Multi Tenant
- Static site
- ENV
- SSH
- Instance
- Droplet

---

## Exercise 1

To complete todays exercises we'll need to create accounts on the Cloud Hosting providers.

- [Heroku](https://signup.heroku.com/?c=70130000001x9jFAAQ)
- [Meteor Developer account](https://www.meteor.com/sign-up)
- [Digital Ocean](https://cloud.digitalocean.com/registrations/new)
- [Amazon Web Services](https://aws.amazon.com/)
- [Microsoft Azure](https://azure.microsoft.com/en-us/)

---

## Lab Activity

Boot a copy of Ubuntu 16.04 on Digital Ocean (Droplet), Microsoft Azure, and AWS (EC2).

- If you don't have one already, generate an SSH key and use SSH to log into the ubuntu instance.
- Use the apt-get package manager to install Node on both instances.

Make sure you can answer the following questions:

- What are the main differences between a Droplet, Azure VM and EC2 Instance?
- What are the main differences, that you can see, between Digital Ocean, Microsoft Azure and AWS?
- Based on you experience with a basic install, which cloud hosting provider do you prefer?
- How does Heroku differ from the other Cloud hosting providers


---

## Additional Resources

*Additional resources TBA.*
