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

## Terminal commands

The Terminal is a way to talk to your computer by typing commands instead of clicking around. The commands below work on macOS. Spaces matter, and the computer usually does exactly what you type, so slow down for the delete commands.

```bash
pwd
```

`pwd` means "print working directory." It tells you which folder you are currently in. This is useful when you are wondering, "Where am I?"

```bash
ls
```

`ls` lists the files and folders in the place where you are standing.

```bash
mkdir practice-folder
cd practice-folder
```

`mkdir` means "make directory," which is just a fancy way to say "make a folder." `cd` means "change directory," so it moves you into a folder. To move back out one level, use `cd ..`.

```bash
cp file.txt copy-of-file.txt
```

`cp` copies a file. The original stays where it is, and the second name is the new copy. Both files need to be in the current folder unless you give a path to another folder.

```bash
mv old-name.txt new-name.txt
```

`mv` means "move," but it also renames files. In this example, the file gets a new name. Double-check the names before pressing Enter.

```bash
rm file.txt
```

`rm` removes a file. It may not go to the Trash like a file deleted in Finder, so treat it as permanent. Do not use it until you are sure the filename is correct.

```bash
rm -rf practice-folder
```

This removes the folder and everything inside it. `-r` means recursive (go through all the contents), and `-f` means force. This is powerful and dangerous. Never paste `rm -rf` unless you completely understand which folder it will delete.

## Fun macOS commands

These commands are little experiments. They are not needed for Git, but they are fun ways to see that the Terminal can do more than list files.

```bash
say hello
say -f text.txt
date
date | say
```

- `say hello` makes your Mac read the word hello out loud.
- `say -f text.txt` reads the contents of `text.txt` out loud. The file has to exist in your current folder. In this project, `speak.txt` is the text file we already have, so you could use `say -f speak.txt`.
- `date` prints the current date and time.
- `date | say` sends the date into `say`, so your Mac reads the date out loud. The `|` symbol is called a pipe: it passes the output of one command into another command.

## Checking the weather

```bash
curl http://wttr.in/
```

`curl` asks a web address for information. This address returns a text weather report.

## Terminal snow

This last one is the snow we saw. Silly but fun. Press `Control + C` when you want it to stop.

```bash
ruby -e 'C=`stty size`.scan(/\d+/)[1].to_i;S=["2743".to_i(16)].pack("U*");a={};puts "\033[2J";loop{a[rand(C)]=0;a.each{|x,o|;a[x]+=1;print "\033[#{o};#{x}H \033[#{a[x]};#{x}H#{S} \033[0;0H"};$stdout.flush;sleep 0.1}'
```

This uses Ruby to draw snowflake characters at random spots in the Terminal. The `-e` means "run the Ruby code that comes next." It keeps looping until you stop it with `Control + C`.