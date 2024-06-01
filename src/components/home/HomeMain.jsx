import React, { useEffect, useState } from 'react';
import MusicCardWrapper from './MusicCardWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../utility';
import { create } from '../../redux/authSlice';

const HomeMain = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [topMixes, setTopMixes] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [backIn, setBackIn] = useState([]);
  const [uniqYours, setUniqYours] = useState([]);
  const [loadingTopMixes, setLoadingTopMixes] = useState(true);
  const [loadingMadeForYou, setLoadingMadeForYou] = useState(true);
  const [loadingRecentlyPlayed, setLoadingRecentlyPlayed] = useState(true);
  const [loadingBackIn, setLoadingBackIn] = useState(true);
  const [loadingUniqYours, setLoadingUniqYours] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        let tokenData = token;
        if (!token) {
          tokenData = await getToken();
          dispatch(create(tokenData));
        }

        const fetchTopMixes = fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=4', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }).then(res => res.json());

        const fetchMadeForYou = fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists?limit=4', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }).then(res => res.json());

        const fetchRecentlyPlayed = fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=4', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }).then(res => res.json());

        const fetchBackIn = fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists?limit=4', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }).then(res => res.json());

        const fetchUniqYours = fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=4', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${tokenData.token}`,
          },
        }).then(res => res.json());

        const [topMixesData, madeForYouData, recentlyPlayed, backIn, uniqYours] = await Promise.all([fetchTopMixes, fetchMadeForYou, fetchRecentlyPlayed, fetchBackIn, fetchUniqYours]);

        setTopMixes(topMixesData.playlists.items);
        setMadeForYou(madeForYouData.playlists.items);
        setRecentlyPlayed(recentlyPlayed.playlists.items);
        setBackIn(backIn.playlists.items);
        setUniqYours(uniqYours.playlists.items);
        setLoadingTopMixes(false);
        setLoadingMadeForYou(false);
        setLoadingRecentlyPlayed(false);
        setLoadingBackIn(false);
        setLoadingUniqYours(false);
      } catch (err) {
        console.log(err);
        setLoadingTopMixes(false);
        setLoadingMadeForYou(false);
        setLoadingRecentlyPlayed(false);
        setLoadingBackIn(false);
        setLoadingUniqYours(false);
      }
    };

    fetchPlaylists();
  }, [dispatch, token]);

  if (loadingTopMixes || loadingMadeForYou || loadingRecentlyPlayed || loadingBackIn || loadingUniqYours) {
    return <div>Loading...</div>; // Yoki skeleton yuklash komponenti
  }

  return (
    <div>
      <MusicCardWrapper title="Your top mixes" playlists={topMixes} />
      <MusicCardWrapper title="Made for you" playlists={madeForYou} />
      <MusicCardWrapper title="Recently played" playlists={recentlyPlayed} />
      <MusicCardWrapper title="Jump back in" playlists={backIn} />
      <MusicCardWrapper title="Uniquely yours" playlists={uniqYours} />
    </div>
  );
};

export default HomeMain;
