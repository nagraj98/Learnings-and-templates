# Git and Github

## Embedding a video in the readme file :
 1. Convert video into *.gif* format. ( using a tool like [cloudconvert](https://cloudconvert.com/gif-converter) )
 2. Upload the *.gif* file to the repository in which you have the readme file.
 3. Navigate to and open the file, and copy the link
 4. In the readme file, add this link like so.
 > `![](https://github.com/.../.../.../myfile.gif)`

Example Gif :
![]()

Points to note about a gif file :
1. A *gif* is **not** a video, it cannot have sound and playback options (play, pause and seek).
2. It is instead a collection of individual images played like a flipbook. 
3. GIF was designed primarily for images and uses LZW (which was defined in 1984), which is not a good compression format for lossless compression
4. Hence its size is generally larger than the original *mp4* video file, and yet worse in quality.


## Push an existing repository from the command line
```
git remote add origin https://github.com/nagraj98/repo-name.git
git branch -M main
git push -u origin main
```

## Committing with detailed description

1. Use the git commit command without any flags. The configured editor will open (Vim in this case):
2. To start typing press the i key on your keyboard, then in insert mode create a better commit with description however you want. The first  line is considered as the title, and the remaining lines will constitute the description.
3. Once you have written all that you need, to return to git, first you should exit insert mode, for that press ESC.
4. Now close the Vim editor with save changes by typing on the keyboard, `:wq` (w - write, q - quit) and press ENTER.

All this can be done in VS-Code terminal.


## Checking git configurations

Check the existing username or user-email.
```
git config user.name
git config user.email
```

change the user-email :
```
git config user.email newemail@mail.com
```

## Stash

Stashing takes the messy state of your working directory, and temporarily save it for further use.
```
git stash  
```

We can also stash the changes along with a message, using below command :

```
git stash save "<Stashing Message>"  
```

Check stored stashes :
```
git stash list  
```

Re-apply the changes that you just stashed :
```
git stash apply
OR
git stash apply <stash id>  
```

Delete a particular stash :
```
git stash drop <stash id>
```

Delete all the available stashes at once :
```
git stash clear
```