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

Updates are submittied as usual. Make commits and push to master

### Deploying your LMS

```bash

```

---
