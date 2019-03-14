## Video Playlist
Create a function called **buildPlaylist** that searches the JSON object included in the .challenge file, which is a real-world example borrowed from the YouTube API. 

YouTube videos can be embedded in a website using an HTML structure called an iframe. Check out this video and click on share > embed to see how these iframes are structured: https://www.youtube.com/watch?v=0LHxvxdRnYc&t=29s

**buildPlaylist** should return an array of these iframes, one for each video in the JSON object.

```javascript
// iframe output example
'<iframe width="1280"height="720" src="https://www.youtube.com/embed/'{insert video embed code here}'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
,,,

