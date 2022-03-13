# Git and Github

## Embedding a video in the readme file :
 1. Convert video into *.gif* format. ( using a tool like [cloudconvert](https://cloudconvert.com/gif-converter) )
 2. Upload the *.gif* file to the repository in which you have the readme file.
 3. Navigate to and open the file, and copy the link
 4. In the readme file, add this link like so (just like for images).
 > `![](https://github.com/.../.../.../myfile.gif)`

Example Gif :
![]()

Points to note about a gif file :
1. A *gif* is **not** a video, it cannot have sound and playback options (play, pause and seek).
2. It is instead a collection of individual images played like a flipbook. 
3. GIF was designed primarily for images and uses LZW (which was defined in 1984), which is not a good compression format for lossless compression
4. Hence its size is generally larger than the original *mp4* video file, and yet worse in quality.

## Creating personal Repo
A repository with the same name as your username, is a [special repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme): its `README.md` will appear on your profile!
For example, the nagraj98 repository's readme appears on my profile like so :

![](https://github.com/nagraj98/Learnings-and-templates/blob/main/assets/Git/personalProfile.png)

#### Adding Github stats cards :
Anurag Hazra has created  an aweome project ([github-readme-stats](https://github.com/anuraghazra/github-readme-stats)) which can be used to show various different github stats cards.
The one I use in my profile is the following :

    ![Nagraj's github stats](https://github-readme-stats.vercel.app/api?username=nagraj98&show_icons=true&title_color=EEFCEF&icon_color=EEFCEF&text_color=00B0E0&bg_color=151515)

and it looks like this :
<!-- -->
<!-- ![Nagraj's github stats](https://github-readme-stats.vercel.app/api?username=nagraj98&show_icons=true&title_color=EEFCEF&icon_color=EEFCEF&text_color=00B0E0&bg_color=151515) --> 

![](https://github.com/nagraj98/Learnings-and-templates/blob/main/assets/Git/githubStats.png)

#### Adding visitor count
[Visitor badge](https://visitor-badge.laobi.icu/#docs) provides a oneline solution to add a visitor count to our profile :

    ![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=nagraj98.nagraj98)

And it looks like so :

<!-- ![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=nagraj98.nagraj98) -->

![](https://github.com/nagraj98/Learnings-and-templates/blob/main/assets/Git/visitorNumber.png)

#### Adding Languages and Tools
[Shields.io](https://shields.io/) provides fast and scalable images as badges, and can be used to beautifully display your languages and tools. Lets look at an example : The following line will show the html badge

    ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=plastic&logo=html5&logoColor=white)

"-HTML5" represents the text HTML5
"-E34F26" is a hex value, and represents the colour of the badge. Note that you can also use colornames like "-black" instead of the hex value.
"?style" represents the look of the badge, and can have values like plastic, flat-square, etc.
"&logo" represents the logo, and shields is so smart, that just adding the name of the technology is enough to get its logo. for example - React, UE4, etc will give the respective logos.
"&logoColor" is helpful in changing the logo color if the original is not matching with the badge.
