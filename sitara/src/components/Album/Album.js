import React from 'react';
import './Album.css';
import Header from '../Header/Header.js';
import AlbumTopImg from '../../images/trending-music.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faCirclePlay } from '@fortawesome/free-solid-svg-icons';

import Softcore from '../../images/softcore.jpeg';
import Skyfall from '../../images/skyfall.png';
import Greedy from '../../images/greedy.png';
import Lovin from '../../images/lovin-on-me.png';
import Pain from '../../images/pain-the-town-red.png';
import Dancin from '../../images/dancin-on-night.jpeg';
import Water from '../../images/water.png';
import PushYourLimit from '../../images/push-your-limits.jpeg';
import Houdini from '../../images/houdini.jpeg';
import Lala from '../../images/lala.jpeg';
import IWannaBeYours from '../../images/i-wanna-be-yours.jpeg';
import Paradise from '../../images/paradise.jpeg';
import AsItWas from '../../images/as-it-was.jpeg';
import AnotherLove from '../../images/another-love.png';
import DayLight from '../../images/daylight.png';
import Beggin from '../../images/beggin.jpeg';
import WhatWasIMadeFor from '../../images/what-was-i-made-for.png';
import DaddyIssues from '../../images/daddy-issue.jpeg';
import RollingInTheDeep from '../../images/rolling-in-the-deep.png';
import OneShort from '../../images/one-shot.jpeg';

const songs = [
    {
        id: 1,
        image: Softcore,
        title: 'Softcore',
        artist: 'The Neighbourhood',
        releaseDate: 'Nov 4, 2023',
        album: 'Hard to Imagine the Neighbourhood Ever Changing',
        time: '3:26',
    },
    {
        id: 2,
        image: Skyfall,
        title: 'Skyfall Beats',
        artist: 'nightmares',
        releaseDate: 'Oct 26, 2023',
        album: 'nightmares',
        time: '2:45',
    },
    {
        id: 3,
        image: Greedy,
        title: 'Greedy',
        artist: 'Tate McRae',
        releaseDate: 'Dec 30, 2023',
        album: 'Greedy',
        time: '2:11',
    },
    {
        id: 4,
        image: Lovin,
        title: 'Lovin On Me',
        artist: 'Jack Harlow',
        releaseDate: 'Dec 30, 2023',
        album: 'Lovin On Me',
        time: '2:18',
    },
    {
        id: 5,
        image: Pain,
        title: 'Pain the Town Red',
        artist: 'Doja Cat',
        releaseDate: 'Dec 29, 2023',
        album: 'Paint The Town Red',
        time: '3:51',
    },
    {
        id: 6,
        image: Dancin,
        title: 'Dancin On Night',
        artist: 'Dua Lipa',
        releaseDate: 'May 27, 2023',
        album: 'Dance The Night (From Barbie Movie)',
        time: '2:56',
    },
    {
        id: 7,
        image: Water,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 8,
        image: PushYourLimit,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 9,
        image: Houdini,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 10,
        image: Lala,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 11,
        image: IWannaBeYours,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 12,
        image: Paradise,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 13,
        image: AsItWas,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 14,
        image: AnotherLove,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 15,
        image: DayLight,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 16,
        image: Beggin,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 17,
        image: WhatWasIMadeFor,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 18,
        image: DaddyIssues,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 19,
        image: RollingInTheDeep,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    },
    {
        id: 20,
        image: OneShort,
        title: 'Water',
        artist: 'Tyla',
        releaseDate: 'Dec 10, 2023',
        album: 'Water',
        time: '3:20',
    }

];
const Album = () => {

    return (
        <div className="container-fluid text-white" style={{ background: 'linear-gradient(to right, #1472dc, #2a526c)' }}>
            <Header />
            <div className="row align-items-center mt-5">
                <div className="col-md-3">
                    <img src={AlbumTopImg} alt="Trending Music" className="img-fluid rounded albumTopImg" style={{marginLeft:"50px"}} />
                </div>
                <div className="col-md-9">
                    <h1 className="display-5">Trending songs <span className="text-danger">mix</span></h1>
                    <p className="text-light">tate mcree, nightmares, the neighborhood, doja cat and ...</p>
                    <div className="d-flex align-items-center mb-3">
                        <span>20 songs</span>
                        <span className="mx-2">&bull;</span>
                        <span>1h 36m</span>
                    </div>
                   <div className='btn-album'>
                    <span className='me-2' style={{fontSize:"20px",fontWeight:"600"}}>Play All</span>
                   <FontAwesomeIcon icon={faCirclePlay} rotation={'007'} style={{color: "#ff007f",fontSize:"50px",cursor:"pointer"}} />
                   
                   </div>
                </div>
            </div>


            <div className="container-fluid my-5 p-4 rounded text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Album</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => (
                            <tr key={song.id}>
                                <td>{`#${index + 1}`}</td>
                                <td>
                                    <img src={song.image} alt={song.title} className="song-image" />
                                    <span className="ps-3">{song.title}</span>
                                </td>
                                <td>{song.releaseDate}</td>
                                <td className='text-center'>{song.album}</td>
                                <td>
                                    <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                                </td>
                                <td>{song.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Album;