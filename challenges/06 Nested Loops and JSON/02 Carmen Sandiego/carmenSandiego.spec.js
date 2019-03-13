const func = require('./carmenSandiego.challenge');

describe('Steamroller requirements', () => {
    let obj1 = {
        country_01:{
            country:'Chile',
            searchResults:{
                seaFood:'good'
            }
        },
        country_02:{
            country:'Austria',
            searchResults:{
                vienna:'Awesome',
                carmenSandiego:true
            }
        },
        country_03:{
            country:'Canada',
            searchResults:{
                temperature:'Way too cold',
                politenessLevel:'Very high',
                carmenSandiego:true
            }
        }
    };

    let obj2 = {
        country_01:{
            country:'France',
            searchResults:{
                food:'magnifique',
                walkingAlongTheSeine:'Amazing',
                carmenSandiego:false
            }
        },
        country_02:{
            country:'Australia',
            searchResults:{
                kangaroos:'present',
                hugeSpiders:'Also present',
                nemo:'Not found',
            }
        },
        country_03:{
            country:'Mexico',
            searchResults:{
                driving:'very dangerous',
                beaches:'incredible',
                locals:'wonderful',
                carmenSandiego:true
            }
        }
    };

    it('returns an array',()=>{
        expect(Array.isArray(func(obj1))).toBe(true);
    });

    it('returns an array that contains all the countries where Carmen Sandiego was found',()=>{
        let result1 = func(obj1);
        let result2 = func(obj2);
        expect(result1.includes('Austria')).toBe(true);
        expect(result1.includes('Canada')).toBe(true);
        expect(result2.includes('Mexico')).toBe(true);
    });

    it('does not contain any false positive results',()=>{
        let result1 = func(obj1);
        let result2 = func(obj2);
        expect(result1.includes('Chile')).toBe(false);
        expect(result2.includes('France')).toBe(false);
        expect(result2.includes('Australia')).toBe(false);
    });

});