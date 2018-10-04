# LMS Monorepo

This is the official RED Academy LMS Monorepo.

## How To Use

---

### Cloning the LMS you need

```bash
 mkdir LMS && cd LMS
 git init
 git remote add origin https://github.com/redacademy/LMS.git
 git config core.sparsecheckout true
 echo "adp-london/*" >> .git/info/sparse-checkout
 git pull --depth=1 origin master
```

To add another LMS simply:

```bash
 cd LMS
 echo "adp-vancouver/*" >> .git/info/sparse-checkout
 git pull --depth=1 origin master
```

### Submitting updates

**Step 1:**

Create a branch for your proposed updates, and commit code as usual. 

**Step 2:**

When finished, push your branch to origin and create a pull request against `master`. After your code has been reviewed and approved, it will be merged into `master`.


### Deploying your LMS

Once the changes have been merged into master, a pull request will be created against `[your-lms]-production`. For example: `adp-london-production`. A final review will be performed, and once the branch is merged, a Heroku deploy is triggered!

---
