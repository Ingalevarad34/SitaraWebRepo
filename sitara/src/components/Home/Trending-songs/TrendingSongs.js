import React from 'react';
import './TrendingSongs.css'; // Import custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Softcore from '../../../images/softcore.jpeg';
import Skyfall from '../../../images/skyfall.png';
import Greedy from '../../../images/greedy.png';
import Lovin from '../../../images/lovin-on-me.png';
import Pain from '../../../images/pain-the-town-red.png';
import Dancin from '../../../images/dancin-on-night.jpeg';
import Water from '../../../images/water.png';

const TrendingSongs = () => {
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
  ];

  return (
    <div className="container mt-5 trending-songs lato-regular-table">
      <h2 className="text-left mb-4 lato-bold">
        Trending <span className="text-gradient">Songs</span>
      </h2>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Release Date</th>
              <th className='text-center'>Album</th>
              <th></th>
              <th>Time</th>
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
      <div className="text-center mt-3">
        <button className="btn bg-dark text-white"><span className='pe-2'>+</span>View All</button>
      </div>
    </div>
  );
};

export default TrendingSongs;
