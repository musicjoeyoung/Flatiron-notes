# Notes from Meeting 1

## Git & GitHub
```bash
git init
git status
git add . (put work into an envelope)
git commit -m "clear commit message" (seal the envelope)
--go to Github...
git push (put the envelope)
```

## What those commands are doing

Git is basically a notebook for your code. It keeps track of what changed so you can look back at older versions if you mess something up. Very handy, because everybody messes something up.

- `git init` starts Git in the folder. You usually only do this once per project.
- `git status` asks Git, "What is going on right now?" Run this a lot.
- `git add .` stages all changed files. Staging means, "These are the changes I want in my next snapshot."
- `git commit -m "clear commit message"` saves a snapshot with a message. The message should say what changed.
- `git push` sends your local commits to GitHub so they are backed up online.

## A normal Git routine

Here is the flow you will probably use most of the time:

```bash
git status
git add .
git commit -m "add beginner JavaScript examples"
git push
```

Run `git status` again after pushing. If it says your branch is up to date and there is nothing to commit, you are good to go.

## A few important words

- **Repository (repo):** The project folder Git is watching.
- **Commit:** A saved snapshot of your work.
- **Branch:** A separate line of work. `main` is the usual starting branch.
- **Remote:** The online copy of your repo, usually on GitHub.
- **Local:** The copy on your own computer.

## JavaScript reminders

JavaScript is the language we are practicing in `script.js`.

- A **variable** stores a value, like a name, number, or true/false answer.
- A **function** is a reusable block of code. Write it once, then call it when you need it.
- An **array** is a list of values.
- An **if statement** lets your code choose between two paths.
- A **loop** repeats a piece of code for you, which saves you from writing the same line over and over.

To run the JavaScript file from this folder, use:

```bash
node script.js
```

If you see the messages printed in the terminal, your code ran. If Node reports an error, read the line number first. It is usually pointing near the typo or missing character.