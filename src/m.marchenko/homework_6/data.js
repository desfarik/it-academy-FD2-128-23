const ALL_ALBUMS = [
    {
        album_id: '1',
        img: 'img/album_cover_butirka.jpg',
        name: 'Бутырка. Хиты'
    },

    {
        album_id: '2',
        img: 'img/album_cover_hardbass.jpg',
        name: 'Хардбасс для ВАЗ-2109'
    },

    {
        album_id: '3',
        img: 'img/album_cover_instasamka.jpg',
        name: 'INSTASAMKA - MOMMY'
    },

    {
        album_id: '4',
        img: 'img/album_cover_pistoletov.jpg',
        name: 'Александр Пистолетов'
    },

    {
        album_id: '5',
        img: 'img/album_cover_milana_khametova.jpg',
        name: 'МИЛАНА ХАМЕТОВА ТИКТОК ЛАЙКИ'
    },
]

const ALL_ITEMS = [
    {
        id: 1,
        img: 'img/album_cover_butirka.jpg',
        song: 'audio/Бутырка - Аттестат.mp3',
        artist: 'Бутырка',
        name: 'Аттестат',
        duration: '4:25',
        album: '1',
    },

    {
        id: 2,
        img: 'img/album_cover_butirka.jpg',
        song: 'audio/Бутырка - Запахло Весной.mp3',
        artist: 'Бутырка',
        name: 'Запахло весной',
        duration: '4:10',
        album: '1',
    },

    {
        id: 3,
        img: 'img/album_cover_butirka.jpg',
        song: 'audio/Бутырка - Районный Прокурор.mp3',
        artist: 'Бутырка',
        name: 'Районный Прокурор',
        duration: '3:45',
        album: '1',
    },
    
    {
        id: 4,
        img: 'img/album_cover_butirka.jpg',
        song: 'audio/Бутырка - Тает Снег.mp3',
        artist: 'Бутырка',
        name: 'Тает Снег',
        duration: '3:54',
        album: '1',
    },

    {
        id: 5,
        img: 'img/album_cover_butirka.jpg',
        song: 'audio/Бутырка - Шарик.mp3',
        artist: 'Бутырка',
        name: 'Шарик',
        duration: '4:10',
        album: '1',
    },

    {
        id: 6,
        img: 'img/album_cover_hardbass.jpg',
        song: 'audio/Hard Bass School - Narkoman.mp3',
        artist: 'Hard Bass School',
        name: 'Narkoman',
        duration: '2:10',
        album: '2',
    },

    {
        id: 7,
        img: 'img/album_cover_hardbass.jpg',
        song: 'audio/Hard Bass School - Slavic Lives Matter.mp3',
        artist: 'Hard Bass School',
        name: 'Slavic Lives Matter',
        duration: '2:03',
        album: '2',
    },

    {
        id: 8,
        img: 'img/album_cover_hardbass.jpg',
        song: 'audio/Hard Bass School - Наш гимн.mp3',
        artist: 'Hard Bass School',
        name: 'Наш гимн',
        duration: '3:56',
        album: '2',
    },

    {
        id: 9,
        img: 'img/album_cover_hardbass.jpg',
        song: 'audio/XS Project - Бочка, бас, колбасёр.mp3',
        artist: 'XS Project',
        name: 'Бочка, бас, колбасёр',
        duration: '3:45',
        album: '2',
    },

    {
        id: 10,
        img: 'img/album_cover_hardbass.jpg',
        song: 'audio/XS Project - Водоворот.mp3',
        artist: 'XS Project',
        name: 'Водоворот',
        duration: '4:15',
        album: '2',
    },

    {
        id: 11,
        img: 'img/album_cover_instasamka.jpg',
        song: 'audio/INSTASAMKA - Juicy.mp3',
        artist: 'INSTASAMKA',
        name: 'Juicy',
        duration: '2:00',
        album: '3',
    },

    {
        id: 12,
        img: 'img/album_cover_instasamka.jpg',
        song: 'audio/INSTASAMKA - Lipsi ha.mp3',
        artist: 'INSTASAMKA',
        name: 'Lipsi ha',
        duration: '2:01',
        album: '3',
    },

    {
        id: 13,
        img: 'img/album_cover_instasamka.jpg',
        song: 'audio/INSTASAMKA - Popstar.mp3',
        artist: 'INSTASAMKA',
        name: 'Popstar',
        duration: '2:18',
        album: '3',
    },

    {
        id: 14,
        img: 'img/album_cover_instasamka.jpg',
        song: 'audio/INSTASAMKA - За деньги да.mp3',
        artist: 'INSTASAMKA',
        name: 'За деньги да',
        duration: '1:59',
        album: '3',
    },

    {
        id: 15,
        img: 'img/album_cover_instasamka.jpg',
        song: 'audio/INSTASAMKA - И чтоэ.mp3',
        artist: 'INSTASAMKA',
        name: 'И чтоэ',
        duration: '1:56',
        album: '3',
    },

    {
        id: 16,
        img: 'img/album_cover_pistoletov.jpg',
        song: 'audio/Александр Пистолетов - Из России в Украину.mp3',
        artist: 'Александр Пистолетов',
        name: 'Из России в Украину',
        duration: '2:50',
        album: '4',
    },

    {
        id: 17,
        img: 'img/album_cover_pistoletov.jpg',
        song: 'audio/Александр Пистолетов - Наш самолёт.mp3',
        artist: 'Александр Пистолетов',
        name: 'Наш самолёт',
        duration: '4:15',
        album: '4',
    },

    {
        id: 18,
        img: 'img/album_cover_pistoletov.jpg',
        song: 'audio/Александр Пистолетов - Робот-Терминатор.mp3',
        artist: 'Александр Пистолетов',
        name: 'Робот-Терминатор',
        duration: '2:12',
        album: '4',
    },

    {
        id: 19,
        img: 'img/album_cover_pistoletov.jpg',
        song: 'audio/Александр Пистолетов - Трах Тиби Дох.mp3',
        artist: 'Александр Пистолетов',
        name: 'Трах Тиби Дох',
        duration: '3:33',
        album: '4',
    },

    {
        id: 20,
        img: 'img/album_cover_pistoletov.jpg',
        song: 'audio/Александр Пистолетов - Я российский новый пират.mp3',
        artist: 'Александр Пистолетов',
        name: 'Я российский новый пират',
        duration: '3:10',
        album: '4',
    },

    {
        id: 21,
        img: 'img/album_cover_milana_khametova.jpg',
        song: 'audio/Милана Хаметова - Воздушный поцелуй.mp3',
        artist: 'Милана Хаметова',
        name: 'Воздушный поцелуй',
        duration: '3:12',
        album: '5',
    },

    {
        id: 22,
        img: 'img/album_cover_milana_khametova.jpg',
        song: 'audio/Милана Хаметова - Купи пёсика.mp3',
        artist: 'Милана Хаметова',
        name: 'Купи пёсика',
        duration: '2:26',
        album: '5',
    },

    {
        id: 23,
        img: 'img/album_cover_milana_khametova.jpg',
        song: 'audio/Милана Хаметова - С Днем Рождения.mp3',
        artist: 'Милана Хаметова',
        name: 'С Днем Рождения',
        duration: '2:15',
        album: '5',
    },

    {
        id: 24,
        img: 'img/album_cover_milana_khametova.jpg',
        song: 'audio/Милана Хаметова & DAVA - Один дома.mp3',
        artist: 'Милана Хаметова & DAVA',
        name: 'Один дома',
        duration: '2:01',
        album: '5',
    },

    {
        id: 25,
        img: 'img/album_cover_milana_khametova.jpg',
        song: 'audio/Милана Хаметова feat. Milana Star - ЛП.mp3',
        artist: 'Милана Хаметова feat. Milana Star',
        name: 'ЛП',
        duration: '2:12',
        album: '5',
    },
]

