const func = require('./videoPlaylist.challenge');

describe('Video Playlist requirements', () => {
    it('returns an array',()=>{
        expect(Array.isArray(func())).toBe(true);
    });

    it('returns an array containing only string values',()=>{
        let result = func();
        if(Array.isArray(result)){
            result.forEach(e=>{
                expect(typeof e).toBe('string');
            });
        }
        
    });

    it('returns an array with the correct length',()=>{
        if(Array.isArray(func())){
            expect(func().length).toBe(10);
        }
    });

    it('includes the correct output',()=>{
        let result = func();
        expect(result.includes('<iframe width="1280"height="720" src="https://www.youtube.com/embed/sdbHXKlpPAM?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')).toBe(true);

        expect(result.includes('<iframe width="1280"height="720" src="https://www.youtube.com/embed/8bYBOVWLNIs?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',)).toBe(true);
    });

});