const fs = require('fs-extra')

// REPLACE THIS LINE WITH THE DIRECTORY WHERE YOUR GOOGLE PHOTOS LIVE
const googlePhotosDir = '/Users/kalmanhazins/Google Drive/Google Photos'

const organizeMedia = async () => {
    const items = await fs.readdir(googlePhotosDir);
    const picsOrMovies = items.filter(name => name.match(/20\d{6}_\d{6}.*\.(jpg|mp4)/));
    picsOrMovies.forEach(async item => {
        const [, year, month, day] = /(\d{4})(\d{2})(\d{2})/.exec(item) || []
        if(year && month && day){
            const destDir = `${googlePhotosDir}/${year}/${month}/${day}`;
            await fs.ensureDir(destDir);
            await fs.move(`${googlePhotosDir}/${item}`, `${destDir}/${item}`, { overwrite: true });
        }
    });
};

try {
    organizeMedia();
}
catch(error){
    console.error(error);
}

