import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import Page from '../components/page';
import Card from '../components/card';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Typography from '@material-ui/core/Typography';
import TextLoop from "react-text-loop";
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
      <Head>
        <style>{`
          body {
            margin: 0;
            background: ;
            background: linear-gradient(0deg, rgba(5,37,37,1) 0%, rgba(0,62,136,1) 100%);
          }
        `}</style>
      </Head>

      <Page>
        <Typography variant="h3" gutterBottom>
          Alex Plays
        </Typography>

        <Typography variant="h5" gutterBottom>
          I'm a &nbsp;
          <TextLoop>
            {[
              "Vocalist Guitarist Cellist & Composer",
              "Music Producer",
              "Song Writer"
            ].map((line,key) => (
              <span key={key} style={{fontWeight:'bold'}}>
                {line}
              </span>
            ))}
          </TextLoop>
        </Typography>
        
        <Typography variant="body2" gutterBottom style={{color: 'gray',maxWidth: 640}}>
          Alex has toured the world with his music. His journey started with Cirque inspired scoring and vocals.
          He has worked with Warner Brothers, Universal Music Group, EMI and Cirque du Soleil. His collaborations have been nominated for Grammys.
          In Hang Zhou China, Alex worked with the creation team on the music & playback for Cirque du Soleil's Chinese Resident Show <br/>
          "Cirque X the Land of Fantasy." Come back to hear fresh music creations.   
        </Typography>

        <a href="https://geo.music.apple.com/us/album/7-steps-to-heaven/1210493562?mt=1&app=music"   style={{
            display:'inline-block',
            overflow: 'hidden',
            background: 'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2017-03-01&kind=album&bubble=apple_music)',
            noRepeat: true,
            width:158,
            height:45,
            marginTop: 12
        }}></a>

        <Typography variant="h3" gutterBottom style={{marginTop: 32}}>
          Creations
        </Typography>

        <Card style={{marginBottom: 24}}>
          <iframe width="100%" height="960" scrolling="yes" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3525754&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"></iframe>
        </Card>

       
        <Typography variant="h3" gutterBottom style={{marginTop: 24, marginBottom: 24}}>
          
        </Typography>

        <Grid container  spacing={2}>
          <Grid item xs={12} md={4} sm={6}>
            <Paper>
              <Typography variant="h6" style={{padding: 16}}>
                Production Services
              </Typography>
           
              <List>
                <ListItem>
                    <ListItemText primary="Music Production"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Mixing"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Song Writing"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Mastering"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Grammy Consultation"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Jingles"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Scoring"/>
                </ListItem>
                <ListItem>
                    <a href="http://ifixyourmix.com/" target="blank">
                      <ListItemText primary="ifixyourmix.com"/>
                    </a>
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} sm={6}>
            <Paper>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="alexplaysmusic"
                options={{height: 860}}
              />
            </Paper>
          </Grid>

        </Grid>

      </Page>

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
