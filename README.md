# Time and Space Scotland

The website can be found [here](https://timeandspace-scotland.github.io/timeandspace_website/)

## How to adapt sponsors

This process is in two parts: 

1. Adding a sponsor image
2. Modifying the code in the index.html file.

### What images can I upload?

Ideally the image should be around 230 pixels wide. Most image manipulation programs can provide a resizing. 
Ideal formats for images are .svg (since those offer the best quality). Otherwise an image ending in .png might work as well. Other types of images (.jpg, .gif) can work but they will not render as nicely.

### Adding a sponsor image

- Surf to the following address : 

```
https://github.com/timeandspace-scotland/timeandspace_website
```

You must be logged in to do this. Make sure that you are on the tab "code", and not the "pull request", "actions" or any other.



- **Click on the folder called "assets"**

![image of the asset folder](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/assets.jpg)

This folder holds some code and the images. 



- **Click on the folder called "img"**

![screenshot of the img folder](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/img_folder.jpg)

In this folder is where we put all the images that we link to within the website. This is where you should upload a new logo.



- **Click on the "upload" button to upload a new sponsor logo.**

![screenshot of the upload button](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/upload.jpg)

This takes you to a page where you can upload an image.



- **Click on the "choose your files" text in blue.** 

![screenshot of file upload screen](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/choose_files.jpg)

This will open up a window that allows you to browse through your computer to search for the image of the new sponsor's logo. Choose the image you wish to upload. 

Take good note of the filename of your image. **Do not use spaces in the filename**.

Then we need to save our changes. On this platform this is done through something called a "commit". You should see this just below where you uploaded your images.



- **Commit the image you just uploaded.**

![screenshot of commit](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/commit_img.jpg)

You need to add some text describing what changes you just did. In this example, I wrote that I added an image for a new sponsor. You don't need to put text in both field. 
Then, press "commit changes". 

You should see a spinning icon saying "processing your files" then get back to the overview of the code. 

You can always check if your file has been uploaded correctly by clicking through the folders.



### Modifying the code in the index.html file

 
- **Back to the main address:** 
```
https://github.com/timeandspace-scotland/timeandspace_website
```
You can also surf there by clicking __'timeandspace_website'__ under the dark top navigation bar.

You need to click on the file called "index.html". This will take you to the code.
![screenshot of index](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/index_screenshot.png)

- **Changing sponsors**

The code with the red line next to it is the one of interest. It is above the Charity Number and a number of tags with "script". Right now these lines of code are around line number 210 but this might change later.
(Do not delete any of these lines of code with "script" in it below).

![image of the code](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/code_screenshot.png)
You can see a number of sponsors are added, like for example the Weir Charitable Trust and Women's fund for Scotland.

The code looks like this: 
```
 <img class=" mt-5 mt-lg-0" src="./assets/img/community_fund.svg" />
 <img class=" mt-4 mt-lg-0" src="./assets/img/weir-charitable-trust-logo_1 1.svg"/>
 <img class=" mt-4 mt-lg-0" src="./assets/img/Corra_FC-logo 1.svg" />
 <img class=" mt-4 mt-lg-0" src="./assets/img/women_scotlandc 1.svg" />
 <p class="text-center m-lg-0 mt-4 mt-lg-0">DWT Cargill Fund</p>
```
Each line represents an image of a sponsor. If you need to remove a sponsor, you will need to remove a line. If you need to add a sponsor, you will need to add a line.


At the top of all that code, in the top right corner, there is a pencil. If you click on the pencil, it will allow you to edit the file.
![image of the edit pencil](https://raw.githubusercontent.com/timeandspace-scotland/timeandspace_website/master/assets/img/screenshots/edit_screenshot.png)

- **Removing a sponsor**

Simply remove the line with the image of the sponsor you want to remove. After you've removed and added all you needed, you will need to do the save method called a "commit" as we saw before.

- **Add a sponsor**

Copy and paste a line with the following code:
```
<img class=" mt-4 mt-lg-0" src="./assets/img/[name-of-your-file]" />
```
You need to replace the part with "name-of-your-file" and the brackets with the actual name of the file you uploaded in the first part of the tutorial. 
For information, the part before the src is there to keep the layout working.

- **Saving your changes**

When you are done removing and adding everything, you once more have to scroll down, go to the "commit your changes" box, and write what you did (for example: "adapting sponsors") before clicking commit, as we saw before. This will save your work.

Once this is committed, surf to the website to make sure everything is in its right place. It can take a few minutes for changes to appear on the website.

***Do not worry, if anything ever goes wrong, it can easily be rolled back.***

### The legal stuff
Images are original creations and licensed under Creative Commons [CC BY-NC-ND](https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode)
The code is licensed under MIT license.
```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
