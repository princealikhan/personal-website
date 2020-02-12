import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="Home" />
      <Nav />

      <div className="hero">
        <h1 className="title">Alex Plays</h1>
        <p className="description" style={{textAlign: 'center', padding: 24 , margin:'42px 12px', background: 'lightgray'}}>
          Alex has toured the world with his music. His journey started with Cirque inspired scoring and vocals.
          He has worked with Warner Brothers, Universal Music Group, EMI and Cirque du Soleil. His collaborations have been nominated for Grammys.
          In Hang Zhou China, Alex worked with the creation team on the music & playback for Cirque du Soleil's New Chinese Resident Show <br/>
          "Cirque X the Land of Fantasy."
        </p>
        <h5 style={{textAlign:'center'}} >          Vocalist Guitarist Cellist Composer
</h5>

  
        <div style={{ padding: 24, display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <iframe width="100%" height="827" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3525754&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>
            </div>
          <div>         
            <iframe frameborder="no" height="460px" name="album" src="//widget.cdbaby.com/2c0b5a5b-3af1-411d-9ed3-365121dc271c/album/light/opaque"></iframe>
            <div>
              <h2>Production Services</h2>
                <ul>
                  <li>Music Production</li>
                  <li>Mixing</li>
                  <li>Song Writing</li>
                  <li>Mastering</li>
                  <li>Grammy Consultation</li>
                  <li>Jingles</li>
                  <li>Scoring</li>
                  <li><a href="http://ifixyourmix.com/" target="blank" class="WarnerChapell">ifixyourmix.com</a></li>
                </ul>
                <div class="clear"></div>
            </div>

                  <div>
    
        
          </div>
          </div>
          <div>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="alexplaysmusic"
              options={{height: 860}}
            />
          </div>
        </div>




      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .date {
          height: 24px;
          max-width: calc(100% - 32px)
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
        }
        .date p {
          text-align: center;
        }
        .date span {
          width: 176px;
          text-align: center;
        }
        @keyframes Loading {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        .date .loading {
          max-width: 100%;
          height: 24px;
          border-radius: 4px;
          display: inline-block;
          background: linear-gradient(270deg, #D1D1D1, #EAEAEA);
          background-size: 200% 200%;
          animation: Loading 2s ease infinite;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
