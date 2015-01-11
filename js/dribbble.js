$.jribbble.getShotsByPlayerId('karina_bea', function (work) {
 $.each(work.shots, function (x, shot) {
 $('#work').append('<li><h2>' + shot.title + '</h2><a href="' + shot.url + '"><img src="' + shot.image_teaser_url + '" alt="' + shot.title + '"></a></li> ');
 });
 }, {page: 1, per_page: 3});
