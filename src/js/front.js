let front = {
    hamburger: $('.hamburger'),
    nav: $('.header-list'),

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: true,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true
    },

    init: function () {
        this.events();
        this.headerScroll();
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        // let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },


    headerScroll: function(){
        if( $(window).scrollTop() > 0){
            $('.header').addClass('js-fixed');
            $('.hamburger').addClass('js-fixed');
        } else {
            $('.header').removeClass('js-fixed');
            $('.hamburger').removeClass('js-fixed');
        }
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.toggleClass('js-show');
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.toggleClass('js-show');
        }
    },



    openTab: function (element, tabName, parent) {
        let i, tab_content, tab_links;

        tab_content = $(element).closest(parent).find('.tabs-wrap').find('.tab-content');
        for (i = 0; i < tab_content.length; i++) {
            tab_content[i].style.display = "none";
        }

        tab_links = $(element).closest('.tabs-ul').find('.tab-links');

        for (i = 0; i < tab_links.length; i++) {
            tab_links[i].className = tab_links[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        $(element).addClass('active');
    },


    events: function () {
        let self = this;

        $(window).on('scroll',function(){
            self.headerScroll();
        });

        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });


    }
};





jQuery(function () {
    front.init();
});