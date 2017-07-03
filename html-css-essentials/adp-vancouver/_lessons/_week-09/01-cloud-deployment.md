---
layout: lesson
title: Cloud Deployment
lesson_date: 
---

## Pre-work

Deploying applications "in the cloud" is a fact of life for developers building Internet connected software. Before we dive in, have a look at this primer on Cloud Computing provided by Amazon Web Services, the leading Cloud Computing provider today:

[What is Cloud Computing?](https://aws.amazon.com/what-is-cloud-computing/)

---

## Learning Objectives

We're not going to jump into AWS today. Instead we'll start from the simplest, and most convenient Cloud deployment tools.

- Define cloud computing.
- Distinguish the differences between popular cloud Hosting providers.
- Deploy a static Website using `surge.sh`.
- Deploy a Node / Express site using `now`.
- Deploy a Meteor app using Meteor Galaxy.
- Explain how public / private key encryption works with SSH.
- Deploy a Node / Express / Mongo app using Heroku.

---

## Keywords

- Cloud ☁
- Virtual Machine
- Single Tenant
- Multi Tenant
- Static site
- ENV
- SSH

---

## Exercise 1

To complete todays exercises we'll need to create accounts on the Cloud Hosting providers.

- [Heroku](https://signup.heroku.com/?c=70130000001x9jFAAQ)
- [Meteor Developer account](https://www.meteor.com/sign-up)

---

## Lab Activity

Boot a copy of Ubuntu 16.04 on Digital Ocean (Droplet), Microsoft Azure, and AWS (EC2).

- If you don't have one already, generate an SSH key and use SSH to log into the ubuntu instance.
- Use the apt-get package manager to install Node on both instances.

Make sure you can answer the following questions:

- What are the main differences between a Droplet, Azure VM and EC2 Instance?
- What are the main differences, that you can see, between Digital Ocean, Microsoft Azure and AWS?
- Based on you experience with a basic install, which cloud hosting provider do you prefer?
- How does Heroku differ from the other Cloud hosting providers.

---

## Additional Resources

Apps for Cloud deployment Automation:

- [HashiCorp](https://www.hashicorp.com/)

Digital Ocean has a number of excellent resources:

- [Intro to Digital Ocean](https://www.digitalocean.com/products/)
- [Digital Ocean Community](https://www.digitalocean.com/community/)
 -[Digital Ocean Tutorials](https://www.digitalocean.com/community/tutorials)

Amazon Web Services (AWS):

- [AWS Homepage](https://aws.amazon.com/)
- [Serverless framework for Node](https://serverless.com/)

Heroku:

- [Getting started with Heroku](https://devcenter.heroku.com/start)
