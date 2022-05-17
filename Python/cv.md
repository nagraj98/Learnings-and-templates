# opencv

## Getting started with videos

read [here](https://docs.opencv.org/4.x/dd/d43/tutorial_py_video_display.html)


## Getting started with images

read [here](https://docs.opencv.org/4.x/db/deb/tutorial_display_image.html)


## Opencv tutorials

read [here](https://docs.opencv.org/3.4/d6/d00/tutorial_py_root.html)

# Code


Extracting all the frames from a video
```python
import cv2

# capturing live stream from camera. For this we pass the index of the camera device.
cam = cv2.VideoCapture(0)

# capture a video from a videofile
video = cv2.VideoCapture("path/to/video.mp4")

currentframe = 1

while (True):

    # reading frame by frame. If frame is read correctly, then ret is true.
    ret, frame = cam.read()

    if ret:
        # writing(saving) the frame
        cv2.imwrite("folder/" + str(currentframe) + ".jpg", frame)

        currentframe += 1

# releasing the captured camera/videofile
cam.release()
cv2.destroyAllWindows()
    
```


Merging individual frames into a video using cv:

```python
video_path = "data/myvideo.mp4"
fourcc = cv2.VideoWriter_fourcc(*"HEVC")
fps = 30

img = cv2.imread("frames/f1.jpg")
image_height, image_width, _ = image.shape

vidwriter = cv2.VideoWriter(video_path, fourcc, fps, (image_width, image_height))

for frame_number in range(100):

    # read image
    image = cv2.imread(f"frames/f{frame_number}.jpg")

    # write to video
    vidwriter.write(image)
```




