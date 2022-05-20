# FFMPEG

## Installation (For Windows)

You can either go to the official ffmpeg [downloads](https://ffmpeg.org/download.html) page, and then click on Windows packages, and then go to a distribution from that list OR you can just directly go to [gyan.dev](https://www.gyan.dev/ffmpeg/builds/), which is one of the popular distributions.

Interestingly, they suggest that it is highly recommended to choose a `git master build`; unlike many software, because releases are primarily made for the convenience of OS distributors and package managers and don't signify greater stability or maturity. 

So you can download the full.7z of the latest git master build, and unzip it.

Now just rename the folder to `ffmpeg`, place it wherever you place your installations, and then add the path to the bin directory to your environment variables.

## Usage

#### Create a mp4 file with metadata.
 
FFmpeg is able to dump metadata from media files into a simple UTF-8-encoded INI-like text file and then load it back using the metadata muxer/demuxer.
The file format is as follows:
1. A file consists of a header and a number of metadata tags divided into sections, each on its own line.
2. The header is a ‘;FFMETADATA’ string, followed by a version number (now 1).
3. Metadata tags are of the form ‘key=value’
4. Immediately after header follows global metadata
5. After global metadata there may be sections with per-stream/per-chapter metadata.
6. A section starts with the section name in uppercase (i.e. STREAM or CHAPTER) in brackets (‘[’, ‘]’) and ends with next section or end of file.
7. At the beginning of a chapter section there may be an optional timebase to be used for start/end values. It must be in form ‘TIMEBASE=num/den’, where num and den are integers. If the timebase is missing then start/end times are assumed to be in nanoseconds. Next a chapter section must contain chapter start and end times in form ‘START=num’, ‘END=num’, where num is a positive integer.
8. Empty lines and lines starting with ‘;’ or ‘#’ are ignored.
9. Metadata keys or values containing special characters (‘=’, ‘;’, ‘#’, ‘\’ and a newline) must be escaped with a backslash ‘\’.
10. Note that whitespace in metadata (e.g. ‘foo = bar’) is considered to be a part of the tag (in the example above key is ‘foo ’, value is ‘ bar’).

An example metadata.txt file might look like this :
```
;FFMETADATA1
title=bike\\shed
;this is a comment
artist=FFmpeg troll team

[CHAPTER]
TIMEBASE=1/1000
START=0
#chapter ends at 0:01:00
END=60000
title=chapter \#1
[STREAM]
title=multi\
line

```

run the below command to add this metadata to a video.
```
ffmpeg -i input.mp4 -i metadata.txt -map_metadata 1 -codec copy output-meta.mp4
```


## Python wrapper for ffmpeg 

ffmpeg is a CLI tool, but for complex operations the command can get really complex really quickly. So this python wrapper can be used. 
```
pip install ffmpeg-python
```

You can refer to its [github repo](https://github.com/kkroening/ffmpeg-python) for usage examples.

#### example for merging two videos :
```python
import ffmpeg
input_video1 = ffmpeg.input('../videos/video1.mp4')
input_video2 = ffmpeg.input('../videos/video2.mp4')
ffmpeg.concat(input_video1, input_video2).output('merged.mp4').run()
```