# Google Drive Media Organizer

## Why?

To make a short story long... :smirk: My Google Photos from my Android automatically backs up to my Google Drive. This of course is a good thing, but since all of the files end up in the same folder, it has gotten close to impossible to look through hundreds and hundreds of pictures/movies.

So, an idea struck me - why not write a script that would parse out the year, month and date from the filename, create the appropriate folders and move the files in there?

The rest is history...

## How do I run this thing?

You will need to have Node.js installed (I had 6.10 installed - not sure what other versions this will work on).

- Clone this repo.
- Inside `index.js` replace the following line with the path to your `Google Photos` folder (This should probably be an environment variable or a property or whatever...) 
```javascript
const googlePhotosDir = '/Users/kalmanhazins/Google Drive/Google Photos'
```
- Run `npm install`
- Run `node index.js`