import React from 'react';
import './PopularSongs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import WithoutMe from '../../../images/superman.jpeg';
import MockingBird from '../../../images/mocking-bird.jpg';
import TheRealSlimShady from '../../../images/slim-shady.jpeg';
import LoseYourself from '../../../images/lose-yourself.jpeg';
import Godzila from '../../../images/music-to-be-murdered.jpeg';




const PopularSongs = () => {
  const songs = [
    {
      id: 1,
      image: WithoutMe,
      title: 'Without Me',
      artist: 'Eminem',
      releaseDate: 'May 15, 2002',
      Played : '21,215,618',
      time: '4:50',
    },
    {
      id: 2,
      image: MockingBird,
      title: 'MockingBird',
      artist: 'Eminem',
      releaseDate: 'Aprl 25, 2005',
      Played : '19,856,112',
      time: '4:10',
    },
    {
      id: 3,
      image: TheRealSlimShady,
      title: 'The Real Slim Shady',
      artist: 'Eminem',
      releaseDate: 'Nov 30, 2023',
      Played: '16,564,223',
      time: '4:44',
    },
    {
      id: 4,
      image: LoseYourself,
      title: 'Lose Yourself',
      artist: 'Eminem',
      releaseDate: 'jan 5, 2020',
      Played: '16,240,390',
      time: '5:22',
    },
    {
      id: 5,
      image: Godzila,
      title: 'Godzila',
      artist: 'Eminem',
      releaseDate: 'feb 5, 2022',
      Played: '14,367,500',
      time: '3:30',
    },
    
  ];

  return (
    <div className="container mt-5 trending-songs lato-regular-table">
      <h2 className="text-left mb-4 lato-bold">
        Popular 
      </h2>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Release Date</th>
              <th className='text-center'>Played</th>
              <th></th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <td className='td'>{`#${index + 1}`}</td>
                <td className='td'>
                  <img src={song.image} alt={song.title} className="song-image" />
                  <span className="ps-3">{song.title}</span>
                </td>
                <td className='td'>{song.releaseDate}</td>
                <td className='text-center td'>{song.Played}</td>
                <td className='td'>
                  <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                </td>
                <td className='td'>{song.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button className="btn  text-white"style={{backgroundColor : "#ff00ff"}}><span className='pe-2'>+</span>Show More</button>
      </div>
    </div>
  );
};

export default PopularSongs;
