function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Whitney Houston",
            title: "All at Once",
            release_year: 1985,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        // Add a record here
        }
       
    };
   return myMusic
}
console.log(myFunction()[2]);
myFunction()[2];
module.exports = myFunction;