# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## How To Use

---

### Cloning the LMS you need

```bash
 mkdir LMS && cd LMS
 git init
 git remote add origin https://github.com/redacademy/LMS.git
 git config core.sparsecheckout true
 echo "adp-london/*" >> .git/info/sparse-checkout # <- Edit this line with the subfolder you need.
 git pull --depth=1 origin master
```

To add another LMS simply append an entry to the `sparse-checkout` file:

```bash
 cd LMS
 echo "adp-vancouver/*" >> .git/info/sparse-checkout # <- Edit this line with the subfolder you need.
 git read-tree -mu HEAD
```

### Removing an LMS locally

To remove a checked-out LMS, remove the subfolder from the `sparse-checkout` file, and run:
```bash
 git read-tree -mu HEAD
```

### Submitting updates

**Step 1:**

Create a branch for your proposed updates, and commit code as usual. 

**Step 2:**

When finished, push your branch to `origin`, eg. `git push origin adp-london-update-slides` and create a pull request against `master`. After your code has been reviewed and approved, it will be merged into `master`.


### Deploying your LMS

Once the changes have been merged into master, a pull request will be created against `[your-lms]-production`. For example: `adp-london-production`. A final review will be performed, and once the branch is merged, a Heroku deploy is triggered!

---
