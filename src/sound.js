var player = require('play-sound')(opts = {})
player.play('./assets/BeerYouBeerMe.mp3', function(err){
    if (err) throw err
})
