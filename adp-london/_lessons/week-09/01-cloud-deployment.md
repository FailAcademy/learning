---
layout: lesson
title: Cloud Deployment
lesson_date: 2019-03-06
---

## Pre-work

Web developers have a lot of convenient tools for deploying their projects. Take a look at the ones listed here. You might find something you can use.

- [https://deploystack.io/](https://deploystack.io/)

---

## Learning Objectives

- Define Cloud Hosting vs. Cloud Computing.
- Provide a general description of how to host a website in the Cloud (Cloud Hosting).
- Distinguish the differences between popular Cloud Hosting providers.
- Understand the basic operation of a public website before the general availability of Cloud Hosting.
- Define the term "Environment" in the context of Web Applications.
- Take steps to prepare a NodeJS / Postgres / MongoDB for deployment to a Cloud Hosting provider.
- Deploy your first project to [Heroku](https://www.heroku.com/)!

---

## Keywords

- Cloud ☁
- Virtual Machine
- Static site
- Production vs. Development
- Build task
- ENV

---

## Exercise 1

To complete todays exercises we'll need to create accounts on the Cloud Hosting providers.

- [Heroku](https://signup.heroku.com/?c=70130000001x9jFAAQ)
- [Meteor Developer account](https://www.meteor.com/sign-up)

---

## Exercise 2

**Configure your application's production environment settings**

When deploying, we'll need to make sure we've provided the correct configuration and overrides so our
application will run in its new environment.

- Prepare your first project for deployment by setting all of the necessary production environment variables.

---

## Exercise 3

**Create a production build of your application**

Create a build task to collect all of the necessary files, and output them into a separate directory, effectively creating a new copy of your applications files that are optimized to run in a non-development environment.

Once you've generated a build, test your new build by running it locally to ensure your configuration changes are working.

---

## Lab Activity

Deploy your new production build to [Heroku](https://www.heroku.com/)!

What you'll need to do:

- Sign-up with Heroku
- Create a new project using the Heroku web interface
- Add the Postgres Heroku add-on
- Set the correct environment variables in the Heroku Dashboard
- Create a copy of your local Postgres database and upload it to Heroku
- Configure git push deploys from your production build directory

---

## Bonus Lab

If you deployed your Node/Postgres application, see if you can use Heroku to deploy your Meteor application!

**Hints:**

- You'll need to use the MLab Heroku add-on, it costs 5\$
- You'll also need to configure [this Heroku Buildpack](https://github.com/AdmitHub/meteor-buildpack-horse)

---

## Additional Resources

Heroku:

- [Getting started with Heroku](https://devcenter.heroku.com/start)

Digital Ocean has a number of excellent resources:

- [Intro to Digital Ocean](https://www.digitalocean.com/products/)
- [Digital Ocean Community](https://www.digitalocean.com/community/) -[Digital Ocean Tutorials](https://www.digitalocean.com/community/tutorials)

Amazon Web Services (AWS):

- [AWS Homepage](https://aws.amazon.com/)
- [Serverless framework for Node](https://serverless.com/)

Apps for Cloud deployment Automation:

- [HashiCorp](https://www.hashicorp.com/)
