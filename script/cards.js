console.log('Cargando Cards')

const dataCards = [

    {
        "title": "Juego del año",
        "url_image": "./img/ark.png",
        "desc": "Este impresionante juego, hecho solo para los más exigentes y amantes de los dinosaurios.",
        "cta": "Mostrar más...",
        "link": "https://www.playstation.com/es-cr/games/ark-survival-ascended/"

    },


    {
        "title": "Juego del mes",
        "url_image": "./img/crash.png",
        "desc": "Este colorido mundo, diseñado para los amantes de la jungla.",
        "cta": "Mostrar más...",
        "link": "https://www.playstation.com/es-cr/games/crash-team-racing-nitro-fueled/"

    },


    {
        "title": "Juego del día",
        "url_image": "./img/vaquero.png",
        "desc": "Bienvenido al viejo oeste, fabricado para los amantes de la acción, ¿Estás listo?",
        "cta": "Mostrar más...",
        "link": "https://store.playstation.com/es-cr/product/UP1004-CUSA03041_00-REDEMPTIONFULL02"

    },

];

(function () {

    let CARD = {
        init: function () {
            let _self = this;
            this.insertData(_self);
        },

        insertData: function (_self) {
            dataCards.map(function (item, index) {
                document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
            });
        },

        tplCardItem: function (item, index) {
            return (`<div class='card-item id='card-number-${index}'>
                <img src='${item.url_image}'>
                <div class= 'card-info'>
                   <p class='card-title'>${item.title}</p>
                   <p class='card-desc'>${item.desc}</p>
                   <a class= 'card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                </div>

                
                </div>`)
        },
    }

    CARD.init();

})();