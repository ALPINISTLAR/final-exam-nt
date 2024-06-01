import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AlbumCard from './AlbumCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getToken } from '../utility';
import { create } from '../../redux/authSlice';

const HomeHero = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(4); // Max 4 pages
  const [loading, setLoading] = useState(true);

  const fetchFeaturedPlaylists = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setFeaturedPlaylists(data.playlists.items);
      setNextUrl(data.playlists.next);
      setPrevUrl(data.playlists.previous);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTokenAndPlaylists = async () => {
      if (!token) {
        const tokenData = await getToken();
        dispatch(create(tokenData));
      } else {
        const initialUrl = 'https://api.spotify.com/v1/browse/featured-playlists?limit=6';
        fetchFeaturedPlaylists(initialUrl);
      }
    };

    fetchTokenAndPlaylists();
  }, [dispatch, token]);

  const handleNext = () => {
    if (nextUrl && page < totalPages) {
      fetchFeaturedPlaylists(nextUrl);
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (prevUrl && page > 1) {
      fetchFeaturedPlaylists(prevUrl);
      setPage(page - 1);
    }
  };

  return (
    <div className='home-hero'>
      <div className="top">
        <button id='prev' onClick={handlePrev} disabled={!prevUrl || page <= 1}>
          <img src="arrow.svg" alt="arrow" />
        </button>
        <button id='next' onClick={handleNext} disabled={!nextUrl || page >= totalPages}>
          <img src="arrow.svg" alt="arrow" />
        </button>
      </div>

      <h1 className='home-title'>Good afternoon</h1>

      <div className="album-wrapper">
        {loading
          ? Array(6).fill().map((_, index) => <Skeleton className='skeleton' key={index} />)
          : featuredPlaylists.map((playlist) => (
              <AlbumCard key={playlist.id} data={playlist} />
            ))}
      </div>
    </div>
  );
};

export default HomeHero;
