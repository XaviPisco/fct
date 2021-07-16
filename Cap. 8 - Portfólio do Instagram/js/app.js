$(function() {
    var feed = new Instafeed({
        userId: '6055462393',
        accessToken: 'IGQVJYUFg2VE1ES0FFZAjVveFBQTjBwQW5CZAlFNUHh2bkZAIb19UY2hIc2I0QlJLazNaajFhT0lMMkh3RVBPckRzOXI2Mk8za0J1WjVrYzNyRkhXM3BNUExqQk5QVU1sSHN2OUVKSGtNcEd5c05odG9adwZDZD',
        target: 'instafeed',
        get: 'user',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
});