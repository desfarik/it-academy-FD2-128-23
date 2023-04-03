import { useEffect, useState } from 'react';
import { debounce } from './debounce';
import Play from '../assets/image/Play.svg'
import Next from '../assets/image/button_next.svg';
import Pause from '../assets/image/button_pause.svg';
import Prev from '../assets/image/button_pre.svg';


const arr = [
    {
        id: 1,
        img: './images/alan_walker.png',
        name: "Alan Walker",
        songsCount: 12,
        songs: [
            {
                id: 1,
                img: "./images/Alan_Walker_-_Alone.png",
                author: "Alan Walker",
                name: "Alone",
                duration: 160,
                url: "./songs/alan_walker_-_alone.mp3",
            },
            {
                id: 2,
                img: "./images/alan_walker_-_catch_me_if_you_can.jpg",
                author: "Alan Walker",
                name: "Catch me if you can",
                duration: 171,
                url: "./songs/alan_walker_-_catch_me_if_you_can.mp3",
            },
            {
                id: 3,
                img: "./images/alan_walker_-_faded.jpg",
                author: "Alan Walker",
                name: "Faded",
                duration: 172,
                url: "./songs/alan_walker_-_faded.mp3",
            },
            {
                id: 4,
                img: "./images/alan_walker_-_the_drum.jpg",
                author: "Alan Walker",
                name: "The drum",
                duration: 189,
                url: "./songs/alan_walker_-_the_drum.mp3",
            },
            {
                id: 5,
                img: "./images/alan_walker_-_the_spectre.jpg",
                author: "Alan Walker",
                name: "The spectre",
                duration: 193,
                url: "./songs/alan_walker_-_the_spectre.mp3",
            },
            {
                id: 6,
                img: "./images/alan_walker_-_unity.jpg",
                author: "Alan Walker",
                name: "Unity",
                duration: 203,
                url: "./songs/alan_walker_-_unity.mp3",
            },
            {
                id: 7,
                img: "./images/Alan_Walker_-_Alone.png",
                author: "Alan Walker",
                name: "Alone",
                duration: 160,
                url: "./songs/alan_walker_-_alone.mp3",
            },
            {
                id: 8,
                img: "./images/alan_walker_-_catch_me_if_you_can.jpg",
                author: "Alan Walker",
                name: "Catch me if you can",
                duration: 171,
                url: "./songs/alan_walker_-_catch_me_if_you_can.mp3",
            },
            {
                id: 9,
                img: "./images/alan_walker_-_faded.jpg",
                author: "Alan Walker",
                name: "Faded",
                duration: 172,
                url: "./songs/alan_walker_-_faded.mp3",
            },
            {
                id: 10,
                img: "./images/alan_walker_-_the_drum.jpg",
                author: "Alan Walker",
                name: "The drum",
                duration: 189,
                url: "./songs/alan_walker_-_the_drum.mp3",
            },
            {
                id: 11,
                img: "./images/alan_walker_-_the_spectre.jpg",
                author: "Alan Walker",
                name: "The spectre",
                duration: 193,
                url: "./songs/alan_walker_-_the_spectre.mp3",
            },
            {
                id: 12,
                img: "./images/alan_walker_-_unity.jpg",
                author: "Alan Walker",
                name: "Unity",
                duration: 203,
                url: "./songs/alan_walker_-_unity.mp3",
            },
        ],
    },
    {
        id: 2,
        img: "./images/katy_perry.png",
        name: "Katy Perry",
        songsCount: 10,
        songs: [
            {
                id: 1,
                img: "./images/katy_perry_-_dark_horse.jpg",
                author: "Katy Perry",
                name: "Dark horse",
                duration: 215,
                url: "./songs/katy_perry_-_dark_horse.mp3",
            },
            {
                id: 2,
                img: "./images/katy_perry_-_firework.jpg",
                author: "Katy Perry",
                name: "Firework",
                duration: 228,
                url: "./songs/katy_perry_-_firework.mp3",
            },
            {
                id: 3,
                img: "./images/katy_perry_-_hot_n_cold.jpg",
                author: "Katy Perry",
                name: "Hot n cold",
                duration: 220,
                url: "./songs/katy_perry_-_hot_n_cold.mp3",
            },
            {
                id: 4,
                img: "./images/katy_perry_-_kissed.jpg",
                author: "Katy Perry",
                name: "I kissed a girl",
                duration: 189,
                url: "./songs/katy_perry_-_i_kissed_a_girl.mp3",
            },
            {
                id: 5,
                img: "./images/katy_perry_-_roar.jpg",
                author: "Katy Perry",
                name: "Roar",
                duration: 224,
                url: "./songs/katy_perry_-_roar.mp3",
            },
            {
                id: 6,
                img: "./images/katy_perry_-_dark_horse.jpg",
                author: "Katy Perry",
                name: "Dark horse",
                duration: 215,
                url: "./songs/katy_perry_-_dark_horse.mp3",
            },
            {
                id: 7,
                img: "./images/katy_perry_-_firework.jpg",
                author: "Katy Perry",
                name: "Firework",
                duration: 228,
                url: "./songs/katy_perry_-_firework.mp3",
            },
            {
                id: 8,
                img: "./images/katy_perry_-_hot_n_cold.jpg",
                author: "Katy Perry",
                name: "Hot n cold",
                duration: 220,
                url: "./songs/katy_perry_-_hot_n_cold.mp3",
            },
            {
                id: 9,
                img: "./images/katy_perry_-_kissed.jpg",
                author: "Katy Perry",
                name: "I kissed a girl",
                duration: 189,
                url: "./songs/katy_perry_-_i_kissed_a_girl.mp3",
            },
            {
                id: 10,
                img: "./images/katy_perry_-_roar.jpg",
                author: "Katy Perry",
                name: "Roar",
                duration: 224,
                url: "./songs/katy_perry_-_roar.mp3",
            },
        ],
    },
    {
        id: 3,
        img: "./images/taylor_swift.png",
        name: "Taylor Swift",
        songsCount: 12,
        songs: [
            {
                id: 1,
                img: "./images/taylor_swift_-_anti-hero.jpg",
                author: "Taylor Swift",
                name: "Anti-hero",
                duration: 203,
                url: "./songs/taylor_swift_-_anti-hero.mp3",
            },
            {
                id: 2,
                img: "./images/taylor_swift_-_bad_blood.jpg",
                author: "Taylor Swift",
                name: "Bad blood",
                duration: 199,
                url: "./songs/taylor_swift_-_bad_blood.mp3",
            },
            {
                id: 3,
                img: "./images/taylor_swift_-_blank.jpg",
                author: "Taylor Swift",
                name: "Blank space",
                duration: 231,
                url: "./songs/taylor_swift_-_blank_space.mp3",
            },
            {
                id: 4,
                img: "./images/taylor_swift_-_gorgeous.jpg",
                author: "Taylor Swift",
                name: "Gorgeous",
                duration: 209,
                url: "./songs/taylor_swift_-_gorgeous.mp3",
            },
            {
                id: 5,
                img: "./images/taylor_swift_-_haze.jpg",
                author: "Taylor Swift",
                name: "Lavender haze",
                duration: 205,
                url: "./songs/taylor_swift_-_lavender_haze.mp3",
            },
            {
                id: 6,
                img: "./images/taylor_swift_-_shake.jpg",
                author: "Taylor Swift",
                name: "Shake it off",
                duration: 219,
                url: "./songs/taylor_swift_-_shake_it_off.mp3",
            },
            {
                id: 7,
                img: "./images/taylor_swift_-_anti-hero.jpg",
                author: "Taylor Swift",
                name: "Anti-hero",
                duration: 203,
                url: "./songs/taylor_swift_-_anti-hero.mp3",
            },
            {
                id: 8,
                img: "./images/taylor_swift_-_bad_blood.jpg",
                author: "Taylor Swift",
                name: "Bad blood",
                duration: 199,
                url: "./songs/taylor_swift_-_bad_blood.mp3",
            },
            {
                id: 9,
                img: "./images/taylor_swift_-_blank.jpg",
                author: "Taylor Swift",
                name: "Blank space",
                duration: 231,
                url: "./songs/taylor_swift_-_blank_space.mp3",
            },
            {
                id: 10,
                img: "./images/taylor_swift_-_gorgeous.jpg",
                author: "Taylor Swift",
                name: "Gorgeous",
                duration: 209,
                url: "./songs/taylor_swift_-_gorgeous.mp3",
            },
            {
                id: 11,
                img: "./images/taylor_swift_-_haze.jpg",
                author: "Taylor Swift",
                name: "Lavender haze",
                duration: 205,
                url: "./songs/taylor_swift_-_lavender_haze.mp3",
            },
            {
                id: 12,
                img: "./images/taylor_swift_-_shake.jpg",
                author: "Taylor Swift",
                name: "Shake it off",
                duration: 219,
                url: "./songs/taylor_swift_-_shake_it_off.mp3",
            },
        ],
    },
    {
        id: 4,
        img: "./images/tiesto.png",
        name: "Tiesto",
        songsCount: 10,
        songs: [
            {
                id: 1,
                img: "./images/tiesto_-_all_nighter.jpg",
                author: "Tiesto",
                name: "All nighter",
                duration: 134,
                url: "./songs/tiesto_-_all_nighter.mp3",
            },
            {
                id: 2,
                img: "./images/tiesto_-_shy.jpg",
                author: "Tiesto",
                name: "Dont be shy",
                duration: 140,
                url: "./songs/tiesto_-_dont_be_shy.mp3",
            },
            {
                id: 3,
                img: "./images/tiesto_-_hot.jpg",
                author: "Tiesto",
                name: "Hot in it",
                duration: 130,
                url: "./songs/tiesto_-_hot_in_it.mp3",
            },
            {
                id: 4,
                img: "./images/tiesto_-_lay_low.jpg",
                author: "Tiesto",
                name: "Lay low",
                duration: 153,
                url: "./songs/tiesto_-_lay_low.mp3",
            },
            {
                id: 5,
                img: "./images/tiesto_-_buisness.jpg",
                author: "Tiesto",
                name: "The business",
                duration: 164,
                url: "./songs/tiesto_-_the_business.mp3",
            },
            {
                id: 6,
                img: "./images/tiesto_-_all_nighter.jpg",
                author: "Tiesto",
                name: "All nighter",
                duration: 134,
                url: "./songs/tiesto_-_all_nighter.mp3",
            },
            {
                id: 7,
                img: "./images/tiesto_-_shy.jpg",
                author: "Tiesto",
                name: "Dont be shy",
                duration: 140,
                url: "./songs/tiesto_-_dont_be_shy.mp3",
            },
            {
                id: 8,
                img: "./images/tiesto_-_hot.jpg",
                author: "Tiesto",
                name: "Hot in it",
                duration: 130,
                url: "./songs/tiesto_-_hot_in_it.mp3",
            },
            {
                id: 9,
                img: "./images/tiesto_-_lay_low.jpg",
                author: "Tiesto",
                name: "Lay low",
                duration: 153,
                url: "./songs/tiesto_-_lay_low.mp3",
            },
            {
                id: 10,
                img: "./images/tiesto_-_buisness.jpg",
                author: "Tiesto",
                name: "The business",
                duration: 164,
                url: "./songs/tiesto_-_the_business.mp3",
            },
        ],
    },
];

const Main = () => {
    const audio = document.querySelector('audio');
    const [albumShow, SetAlbumShow] = useState(1);
    const [search, SetSearch] = useState('');
    const [songs, SetSongs] = useState(arr[0].songs);
    const [showPlayer, SetShowPlayer] = useState(true);
    const [playingSongID, SetPlayingSongID] = useState(1);
    const [isPlaying, SetIsPlaying] = useState(false);
    const [playingSong, SetPlayingSong] = useState(require(`${songs[playingSongID-1].url}`));
    useEffect(() => {
        SetPlayingSong(require(`${songs[playingSongID-1].url}`))
    } ,[playingSongID])


    const MusicPlayer = () => {
        return (
            <div className='MusicPlayer' style={{position: 'sticky', width: '100%', bottom: 0, padding: '10px 20px', boxSizing: 'border-box',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <img style={{borderRadius: '20px'}} src={require(`${songs[playingSongID-1].img}`)} alt={songs[playingSongID-1].name} />
                <div>
                    <div style={{fontSize: '20px'}}>{songs[playingSongID-1].name}</div>
                    <div>{songs[playingSongID-1].author}</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <img onClick={() => {
                        if (playingSongID > 1){
                            SetPlayingSongID(playingSongID-1)
                        }
                    }} src={Prev} alt='Prev' />
                    <img onClick={() => {
                        if (isPlaying){
                            SetIsPlaying(false);
                            audio.pause();
                        } else {
                            SetIsPlaying(true);
                            audio.play();
                            audio.setAttribute('AutoPlay', '')
                        }
                    }} src={Pause} alt='Pause' />
                    <img onClick={() => {
                        if (playingSongID < arr[albumShow].songsCount){
                            SetPlayingSongID(playingSongID+1)
                        }
                    }} src={Next} alt='Next' />
                </div>
            </div>
        )
    }
    return (
        <>
        <div className='Main'>
            <div className="Albums">
                <div style={{padding: '20px 40px 0px'}}>{'Albums >'}</div>
                <div style={{padding: "20px 40px 20px 40px", display: 'flex', overflow: 'scroll', gap: '20px'}}>
                    {arr.map(el => {
                        return (
                            <img src={require(`${el.img}`)} style={{borderRadius: '24px', border: el.id === albumShow ? 'solid 5px purple' : 'none', boxSizing: 'border-box'}}
                            onClick={() => {SetAlbumShow(el.id); SetSongs(el.songs)}} alt='img' />
                        )
                    })}
                </div>
            </div>
            <div className='seracLine' style={{padding: '20px 40px'}}>
                <input type={'text'} onChange={debounce((event) => {SetSearch(event.target.value)}, 350)}
                style={{width: '100%', borderRadius: '20px', height: '30px', border: 'none', outline: 'none', padding: '5px 10px', boxSizing: 'border-box'}} />
            </div>
            <div className='Songs'>
                <div>{'Sonsg >'}</div>
                {songs.map(el => {
                    if (el.name.toLowerCase().includes(search.toLowerCase()) || el.author.toLowerCase().includes(search.toLowerCase())){
                        return (
                            <div onClick={() => {
                                SetPlayingSongID(el.id);
                                if (!isPlaying) {
                                    SetIsPlaying(true)
                                    audio.setAttribute('AutoPlay', '')
                                }
                                }}
                                 style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
                                <img src={require(`${el.img}`)} style={{borderRadius: '16px'}} alt={el.name} />
                                <div>{el.author} - {el.name}</div>
                                <div style={{display: 'flex', gap: '5px'}}>
                                    <div>{`${Math.floor(el.duration/60)}:${el.duration%60}`}</div>
                                    <img src={Play} alt='play' />
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
        {showPlayer?<MusicPlayer />:''}
        <audio src={playingSong} />
        </>
    )
};

export default Main;