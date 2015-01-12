$.jribbble.getShotsByPlayerId('karina_bea', function (work) {
 $.each(work.shots, function (x, shot) {
 $('#work').append('<div class="one-third.column"><h6>' + shot.title + '</h6><a href="' + shot.url + '"><img src="' + shot.image_url + '" alt="' + shot.title + '"></a></div> ');
 });
 }, {page: 1, per_page: 3});
