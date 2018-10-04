const fs = require('fs-extra')

// REPLACE THIS LINE WITH THE DIRECTORY WHERE YOUR GOOGLE PHOTOS LIVE
const googlePhotosDir = '/Users/kalmanhazins/Google Drive/Google Photos'

fs.readdir( googlePhotosDir )
.then( items => {
    const picsOrMovies = items.filter(name => name.match(/20\d{6}_\d{6}.*\.(jpg|mp4)/))

    picsOrMovies.forEach( item => {
        const [, year, month, day] = /(\d{4})(\d{2})(\d{2})/.exec(item) || []

        if(year && month && day){
            const destDir = `${googlePhotosDir}/${year}/${month}/${day}`;
            fs.ensureDir(destDir)
            .then(() => {
                fs.move(`${googlePhotosDir}/${item}`, `${destDir}/${item}`)
            })
            .catch(err => {
                console.error(err)
            })
        }
    });
})


