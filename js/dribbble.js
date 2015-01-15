$.jribbble.getShotsByPlayerId('karina_bea', function (work) {
    var randomShots = {}; // The final shots will be stored here
    var numRandomShots = 3; // Number of random shots desired
    var numShots = work.shots.length; // Number of total shots
    var randomShotIdx;  // Temp

    // If we are trying to sample more random shots than we have total shots,
    // there will be a race condition below.  Fix that here by not letting
    // there be more random shots than total shots
    if (numRandomShots > numShots) {
        numRandomShots = numShots;
    }

    // Generate each random shot
    while (numRandomShots > 0) {
        --numRandomShots;

        // Generate random shots idx as long as there are collisions to prevent
        // repeats.  Skip out when we have a unique index.
        do {
            // Generate the shot index
            randomShotIdx = Math.floor(Math.random() * work.shots.length);
        }
        while(randomShotIdx in randomShots);

        // Hold onto the shot
        randomShots[randomShotIdx] = work.shots[randomShotIdx];
    }

    for (var i in randomShots) {
        $('#work').append('<div class="one-third.column"><h6>' + randomShots[i].title + '</h6><a href="' + randomShots[i].url + '"><img src="' + randomShots[i].image_url + '" alt="' + randomShots[i].title + '"></a></div> ');
    }
});
