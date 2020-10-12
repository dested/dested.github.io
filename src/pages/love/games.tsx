import React from 'react';

export type Game = {
  youtube: string;
  image?: string;
  github?: string;
  percentDone: string;
  timeSpent: string;
  monetization: JSX.Element;
  whyILikedWorkingOnIt: JSX.Element;
  whyIStopped: JSX.Element;
  whatINeed: JSX.Element[];
  synopsis: JSX.Element;
  title: string | JSX.Element;
  url: string;
};

export const Games: Game[] = [
  {
    title: 'OrbitalGa.me',
    youtube: 'U_Qe1IrehHg',
    github: 'https://github.com/dested/orbitalga.me',
    url: 'https://orbitalga.me',
    timeSpent: 'A few months on and off',
    percentDone: '85%',
    synopsis: (
      <>
        A horizontal scrolling multiplayer space shootemup. You join an active server, probably capped at about 60
        people. You shoot enemies, get powerups, shoot more enemies, and increase your score.
        <br />
        <br /> The purpose is to climb the leaderboard, per game, per day, and all time. Once you die your score is
        saved and all your stats/powerups reset to zero.
      </>
    ),
    monetization: <>Probably microtransaction around ship upgrades, functional and aesthetic, as well as video ads.</>,
    whyILikedWorkingOnIt: (
      <>
        The multiplayer engine was so much fun to work on, writing a good scalable server, as well as being able to spin
        up new servers automatically to meet demand. The typescript code is so completely sound and scalable. It’s a
        beautiful codebase.
      </>
    ),
    whyIStopped: (
      <>
        At some point I ran out of <a href={'https://kenney.nl'}>Kenney</a> assets, and I’m not enough of a game
        designer to make it fun enough to keep playing (a common theme).
      </>
    ),
    whatINeed: [<>Assets</>, <>Game Design</>],
  },

  {
    title: 'SocialWarGames',
    youtube: 'uDmg2FPE_Cc',
    github: 'https://github.com/dested/social-war-games-sls',
    url: 'https://socialwargames.com',
    timeSpent: 'A few months over a few years',
    percentDone: '70%',
    synopsis: (
      <>
        A day/week/month long game played out over the course of several hundred or thousand of turns.
        <br /> <br />
        You enter the game automatically joining one of three "factions". Your faction owns a subset of the map, and has
        units that can be controlled. <br /> <br />
        The gimmick is, you can’t control any one unit yourself. Instead you have the power to vote to make a unit do a
        certain action: move, attack, create a new unit, mine, etc. You will have some number of votes per round,
        probably 5 or so. <br /> <br />
        At the end of the round (probably every 1 minute for fast paced games, or 5 minutes for slower paced games), all
        the votes are tallied and the winning action on each unit is enacted. This will force players (ideally hundreds
        on each side) to vote strategically together to do what is best for each unit. Your actions are kept track of
        and show up on the leaderboard appropriately, things like how many rounds you played, how many units you’ve
        created, resources mined, damage done, etc. <br /> <br />
        Think twitchplayspokemon, but tanks.
      </>
    ),
    monetization: <>Video ad every couple rounds or something</>,
    whyILikedWorkingOnIt: (
      <>
        I wanted to see if I could build a nice casual, infinitely scalable game. The architecture is 100% serverless
        which means it can support literally any number of users without falling over.
      </>
    ),
    whyIStopped: (
      <>
        Balancing the units, and game, is something outside of my wheelhouse. I could also never quite nail down how the
        game UI should look. I’m happy enough with the game board, but the outer layout was always a challenge. I’m just
        not good at it. <br /> <br />
        The bigger reason however is that I don’t know if the game itself is fun enough to make it worth it.
      </>
    ),
    whatINeed: [<>Game UI design</>, <>Game design in general</>],
  },
  {
    title: 'RunRunJump',
    youtube: 'a7_zQRhhNdA',
    github: 'https://github.com/dested/runrunjump',
    url: 'http://runrunjump.com',
    timeSpent: 'A month or so',
    percentDone: '15%',
    synopsis: (
      <>
        This project is pretty old. Back when mario maker came out I got the itch to make a level editor game, but with
        some extra programming components. <br /> <br />
        The idea is you will be able to not only design levels, but script objects and gimmicks in levels. You would be
        able to share these objects for other game designers to use in their levels as well. Levels would have
        leaderboards, recorded runs, things like that.
      </>
    ),
    monetization: <>Ad supported? Upgrade storage space? Not sure</>,
    whyILikedWorkingOnIt: (
      <>
        I got a pretty good working physics engine (stolen directly from super mario world), dropped in some mario
        assets, and called it a day. The idea of sharing levels and objects was really intriguing. It’s fun to build
        tools for other people to build tools.
      </>
    ),
    whyIStopped: (
      <>
        Assets mostly. I would need a fully custom platformer to design and I just didn’t have the stomach for it at the
        time.
      </>
    ),
    whatINeed: [<>Game UI design</>, <>Game character and world design</>, <>An incredibly passionate game designer</>],
  },
  {
    title: (
      <>
        DotsGame <br /> (not official title)
      </>
    ),
    youtube: 'kbPryQOJhWA',
    github: 'https://github.com/dested/dots-game',
    url: 'https://dotsgame.s3-us-west-1.amazonaws.com/index.html',
    timeSpent: 'A few weeks',
    percentDone: "90%, it's just not fun",
    synopsis: (
      <>
        A very simple IO-esque game. It’s basically a multiplayer version of the popular game{' '}
        <a href={'https://play.google.com/store/apps/details?id=com.wardrumstudios.auralux&'}>Auralux</a>. <br />
        <br />
        You spawn in, owning one planet/island/molehill/whatever. Every second or so you that planet generates some
        number of new units. You control those units by moving them to either take over other planets, or attack other
        players.
        <br />
        <br />
        The game goes on and on effectively until someone takes over the entire game. Another leaderboard based game,
        track number of planets captured, units killed, time alive, etc.
      </>
    ),
    monetization: <>Ad supported</>,
    whyILikedWorkingOnIt: (
      <>
        Another casual game, the main technical gimmick was how can I support a hundred players that each control
        literally thousands of units each.
      </>
    ),
    whyIStopped: <>Once I solved the above problem the game was no longer fun to work on, so I moved on.</>,
    whatINeed: [
      <>Game UI design</>,
      <>Game design and balancing (how fast the units move, how much damage they do, upgrades?)</>,
      <>Game assets (I like the simple look, but it’s maybe a bit too simple)</>,
    ],
  },
  {
    title: 'EmoteBingo',
    youtube: '6XWzlmCNKns',
    url: 'https://emote.bingo/',
    timeSpent: 'A couple months',
    percentDone: '100%',
    synopsis: (
      <>
        This is a twitch extension for streamers to play a bingo game with their viewers. Streamers configure the game,
        start it, and then play it out for their viewers in real time via an extension. <br />
        <br />
        This project is in a bit of a different category because I did release it, however I have completely stopped
        working on it.
      </>
    ),
    monetization: <>Twitch bits</>,
    whyILikedWorkingOnIt: (
      <>
        <b>Twitch extensions are magic.</b> They allow you to run code on viewers machines in one of the biggest
        networks on earth. Millions of people use twitch every day and I can deploy code to all of them, if you can make
        something interesting enough for streamers to use.
      </>
    ),
    whyIStopped: (
      <>
        The project was a stepping stone into twitch development, and I would like to do more of it. Just need to think
        of something fun enough to entice streamers to give me 30% of their bit revenue from the game.
      </>
    ),
    whatINeed: [<>Game design (need a new game idea)</>],
  },
  {
    title: 'BounceBlockParty',
    youtube: 'CxYalNgP_lA',
    url: 'https://emote.bingo/',
    timeSpent: 'A month',
    percentDone: '60%',
    synopsis: (
      <>
        This is a different approach to the twitch extension, it is actually a stand alone channel game. You visit{' '}
        <a href={'https://twitch.tv/bounceblockparty'}>bounceblockparty on twitch</a> and watch the latest game play out
        live on stream.
        <br />
        <br />
        While you're watching the stream you can spend credits (obtained through bits or winning or whatever) to
        participate in the next game. <br />
        <br />
        The game is simple, bounce to climb to the top, last player gets the glory of appearing on the leaderboard.
        Daily/weekly/all time leaderboards show players who made it the highest, played the longest, things like that.
        Chat also interacts with the game in real time, causing things like wind storms, extra gravity, etc.
      </>
    ),
    monetization: <>Twitch bits to play and for skins</>,
    whyILikedWorkingOnIt: (
      <>
        As stated above: Twitch extensions are magic. Also as the channel I get 100% of the bits spent, which means I
        can make the cost to play super trivial, 5 bits or so, and stack up major revenue. <br />
        <br />
        Also the technical aspect was delicious. I needed to be able to stream a webpage to a twitch channel 24 hours a
        day via aws. The jumping action is also done completely serverlessly which means I could literally support 100k
        players without a hiccup, just exorbitant cost (which is mitigated by the bits). <br />
        <br />
        Network effect is mitigated by bots initially.
      </>
    ),
    whyIStopped: (
      <>
        This one I am still actively working on, I haven’t lost my spark for it yet, but I am in desperate need of
        assets and game design. It is not fun yet, just technically appealing.
      </>
    ),
    whatINeed: [<>Game Assets</>, <>Game Design</>],
  },
  {
    title: 'OurSonic.org',
    youtube: 'l3Hlmu-ZLGM',
    github: 'https://github.com/OurSonic/OurSonicTyped',
    url: 'https://emote.bingo/',
    timeSpent: 'Years over the course of years',
    percentDone: '75%',
    synopsis: (
      <>
        This is one of my first <i>POC never see the light of day</i> games. I’ve been tinkering with it since 2012. Not
        only does it have every sonic 2 and 3 level exported from the rom (using some crafty custom stuff from{' '}
        <a href={'https://sonicretro.org'}>https://sonicretro.org</a>), but it has a mostly working physics engine, and
        is actually a full blown level and object editor.
      </>
    ),
    monetization: <>None, I own none of the assets</>,
    whyILikedWorkingOnIt: (
      <>
        I built the engine to render and act as the original genesis did, with regards to tile and palette rendering.
        This was a disaster for html canvas, so there was a tremendous amount of optimization that had to go into
        drawing. <br />
        <br />
        Also, I love Sonic, always have.
      </>
    ),
    whyIStopped: (
      <>
        I don’t own any of the assets, and if I wanted to build a custom level editor type game (see runrunjump above),
        I would not use any of the rendering techniques that made this project so damn complicated.
      </>
    ),
    whatINeed: [
      <>Another passionate developer who does not like making money</>,
      <>A lawyer for when sega inevitable shuts the project down</>,
    ],
  },
  {
    title: 'AnyCardGame',
    youtube: '',
    image: 'https://dested.com/assets/project-images/acg.png',
    github: 'https://github.com/Any-Card-Game',
    url: '',
    timeSpent: 'A lifetime',
    percentDone: '10%',
    synopsis: (
      <>
        This project is so old I don’t even have a video of it, and I found the screenshot above in my storage archives
        from 2013. Nevertheless, this is one of my truly favorite projects. It’s the one I pick up every few years.{' '}
        <i>It’s the one my wife hates the most.</i> <br />
        <br />
        AnyCardGame is a full blown card game engine. You design your card game using the editor above, and program the
        logic using JavaScript/TypeScript. Players join the games together and play them according to the programmed
        rules. <br />
        <br />
        As a developer, when someone plays your game, you will be compensated with a percent of ad revenue generated.
        I’ve built and rebuilt this project more times than I care to actually count.
      </>
    ),
    monetization: <>Ads, percent paid to developers</>,
    whyILikedWorkingOnIt: (
      <>This is the ultimate game engine. Strict boundaries, clear goals, developer oriented. What’s not to love?</>
    ),
    whyIStopped: (
      <>
        Mostly, it became very difficult to enable the developers to declaratively design fun and engaging animations
        for their card games. <br />
        <br />
        Also, the fear is that there is only a limited amount of fun card games. The first developer to build blackjack
        and three card poker will dwarf all other developers. I would probably have to branch out to board games too
        eventually.
      </>
    ),
    whatINeed: [<>Another passionate developer</>, <>A UI designer</>, <>A divorce lawyer</>],
  },
];
