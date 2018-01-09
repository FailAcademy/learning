---
layout: slidedeck
title: Cryptography Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Cryptography

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Classical
2. Symmetric
3. Asymmetric
4. Hashing
5. Blockchain

---
template: inverse

# Crypto 101

---
class: center, middle

### What is Cryptography?

---
class: center, middle

Cryptography is a method of storing and transmitting data in a particular form so that only those for whom it is intended can read and process it.

---
# Substitution Ciphers

- Substituting one letter for another

.inline-images[
![freemason cipher](http://www-math.ucdenver.edu/~wcherowi/courses/m5410/freema.gif)
]

---
class: center, middle

#Caesar Cipher

.inline-images[
![caesar cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1200px-Caesar_cipher_left_shift_of_3.svg.png)
]

---
class: center, middle

#Caesar Cipher

.inline-images[
![caesar cipher](https://images-na.ssl-images-amazon.com/images/I/61K6UvP2XxL.png)
]

---
# Exercise 1

Let's implement the Caesar Cipher in JS!

- Encryption
- Decryption

---
# Let's break it!

- How can you brute force the Caesar Cipher?

---
# Vigenere Cipher 

.inline-images[
![vigenere cipher](http://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/FIG-VIG-Table.jpg)
]

---
# Vigenere Cipher
.inline-images[
![vigenere cipher example](https://wafflescrazypeanut.files.wordpress.com/2015/03/untitled1.jpg)
]

---

# Vigenere Cipher

- Cracked since 1854
- English is repetitive
- Your key is repetitive (by the nature of the cipher)
- Cryptanalysis is harder, but not impossible

---
# Frequency Analysis

.inline-images[
![frequency analysis](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/English_letter_frequency_%28alphabetic%29.svg/380px-English_letter_frequency_%28alphabetic%29.svg.png)
]

---
# One Time Pad
<iframe width="560" height="315" src="https://www.youtube.com/embed/FlIG3TvQCBQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

---
template: inverse

# Rule #1: Don't roll your own crypto

---
.inline-images[
![cia triangle](https://www.nissatech.com/wp-content/uploads/2017/05/Picture3.png)
]

---
# Crypto Tenets

- **Confidentiality** - The message the recipient gets can be proven not to have been read by anyone else since it was encoded.
- **Integrity** - The message the recipient gets can be proven not to have been changed since it was encoded.
- **Authenticity** - The message the recipient gets can be proven to have been encoded by (edit) a positively-identified sender.
- **Non-repudiation** - The sender, given a message received by a recipient, cannot validly deny that the message was sent by him or that it was not the original content sent by him.

---
# Crypto Tenets

- **Confidentiality** - Symmetric
- **Integrity** - Hashes
- **Authenticity** - Asymmetric
- **Non-repudiation** - Asymmetric

---
# Modern Cryptography

## Symmetric

- Stream vs Block
- AES, DES

---
# Modern Cryptography

## Asymmetric

- Public & Private Keys
- SSH Keys

---
# Modern Cryptography

## Hashing

- md5
- SHA-*

---
# Symmetric Keys

.inline-images[
![symmetric key diagram](https://www.securityconsulting.net.au/wp-content/uploads/key-management-.jpg)
]

##Two popular implementations:

- AES
- DES / 3DES

---
.inline-images[
![aes diagram](https://image.slidesharecdn.com/unit2-150825031900-lva1-app6891/95/cryptography-and-network-security-68-638.jpg?cb=1440472923)
]

---
#AES: Implementations

- TrueCrypt, VeraCrypt, FileVault(OSX), BitLocker(Windows)
- LastPass, KeePass
- GPG, Signal
- WinZip, 7z, RAR
- NTFS

---
.inline-images[
![des diagram](https://homepage.usask.ca/~dtr467/400/figure2-des_block.gif)
]

---
template: inverse

# Asymmetric / Public Key

What if there's no way to securely share a secret key?

---
template: inverse
# We've got problems...

---
# But also solutions

## Discrete Logarithm Problem

## Prime Factorization Problem

---
# Discrete Logarithm Problem

<pre style="font-size: 2em;">
y = g<sup>x</sup>mod p
</pre>

Given a very large `g` and `p`, it is __very hard__ to determine `x`.

---
class: center, middle, inverse
# Diffie-Hellman

.inline-images[
![diffie and hellman](http://omicrono.elespanol.com/wp-content/uploads/2016/03/Whitfield-Diffie-y-Martin-E.-Hellman.jpg)
]


Seen here after dropping their 1976 hit record, __New Directions in Cryptography__

---
# Diffie-Hellman

<iframe width="560" height="315" src="https://www.youtube.com/embed/M-0qt6tdHzk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

---
class: center, middle, inverse
# RSA 

.inline-images[
![the three RSA lads](https://rsaalgorithm.files.wordpress.com/2013/04/rsa.jpeg)
]

Known for their hit 1978 album, __A Method for Obtaining Digital Signatures and Public-Key Cryptosystems__

---
class: center, middle, inverse
# RSA

<iframe width="560" height="315" src="https://www.youtube.com/embed/EPXilYOa71c" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

---
class: center, middle, inverse

#I have 77 donuts.
#How do I split them into evenly sized boxes?


---
class: center, middle, inverse

#I have 359951 donuts.
#How do I split them into evenly sized boxes?

---
# Prime Factorization Problem

<pre style="font-size: 2em;">
y = g * p
</pre>

Given that `g` and `p` are large primes, it is __very hard__ to determine either number from `y`.

---
# Prime Factorization

- It's hard.
- There is no _efficient_ factorization algorithm

---
# Asymmetric Encryption

.inline-images[
![rsa encryption](https://c1.staticflickr.com/1/418/18626777534_fc5524c031_o.gif)
]

---
# Digital Signing

.inline-images[
![rsa signing](https://i.stack.imgur.com/eCCob.png)
]


---
---

# Public vs Private

When would I use:

My **Public** Key?

My **Private** Key?

Someone elses **Public** Key?

---
# Public vs Private

When would I use:

My **Public** Key? -> Allow others to send me messages

My **Private** Key? -> Digitally sign a document

Someone elses **Public** Key? -> Send a message only they can read

---

---

# Exercise 2

- Create a new SSH key
- Add it to Github
- Use the SSH url to clone a private Github repository:

HTTPS: `https://github.com/redacademy/littlepaper-fall-2017.git`
SSH: `git@github.com:redacademy/littlepaper-fall-2017.git`
---

The best attack vector for any algorithm is through **people**
.inline-images[
![xkcd security](https://imgs.xkcd.com/comics/security.png)
]

---
template: inverse

#Hashing

---


---
template: inverse

# Questions?

{% endhighlight %}
