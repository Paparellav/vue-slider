// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

const app = new Vue(
    {
        el: '#root',
        data: {
            thumbs: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },  
            ],
            currentSlide: 0,       
        },
        methods: {
            nextSlide: function() {
                if (this.currentSlide === this.thumbs.length - 1) {
                    this.currentSlide = 0;
                } else {
                    this.currentSlide++;
                }
            },
            prevSlide: function() {
                if (this.currentSlide === 0) {
                    this.currentSlide = this.thumbs.length - 1;
                } else {
                    this.currentSlide--;
                }
            },
            selectedThumb: function(index) {
                this.currentSlide = index;
            },
            // 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
            stopAutoplay: function() {
                clearInterval(this.autoPlay);
                this.autoPlay = null;
            },
            startAutoPlay: function() {
                this.autoPlay = setInterval(this.nextSlide, 1000);
            }
        },
        // 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
        created() {
            startAutoPlay();
        }
    }
);


    