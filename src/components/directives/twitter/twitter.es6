app.component('twitterItem', {
    templateUrl: 'twitter.html',
    controllerAs: 'twitter',
    bindings: {
        img: '@',
        heading: '@',
        boxClass:'@'
    },
    controller: function ($element, $timeout) {

        var init = () => {};

        init();

        _.extend(this, {});
    }
});
