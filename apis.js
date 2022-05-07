export const getUser = async (user) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/username/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user:user
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getUser: " + err);
      });
    return json;
  };

export const testconnection = async () => {
    //Working
    const json = await fetch("https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/username/testconnection", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in testconnection: " + err);
      });
    return json;
  };
// https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/username/getteams

export const getTeams = async () => {
    //Working
    const json = await fetch("https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/username/getteams", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getTeams: " + err);
      });
    return json;
  };


  export const addReview = async (username, rating, review, matchDate, homeTeam, awayTeam) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/addreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username, 
        rating: rating, 
        review: review, 
        matchDate: matchDate, 
        homeTeam: homeTeam, 
        awayTeam: awayTeam
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in addReview: " + err);
      });
    return json;
  };

  export const getPlayerByPosition = async (position) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getplayerbyposition", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        position: position
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getPlayerByPosition: " + err);
      });
    return json;
  };


  export const getPlayerFromNationality = async (nationality) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getplayerfromnationality", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nationality: nationality
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getPlayerFromNationality: " + err);
      });
    return json;
  };

  export const getPlayerInfo = async (name) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getplayerinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playerName: name
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getPlayerInfo: " + err);
      });
    return json;
  };

  export const getTeamFromCity = async (city) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getteamfromcity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city:city
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getTeamFromCity: " + err);
      });
    return json;
  };

  export const getTeamFromStadium = async (stadiumName) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getteamfromstadium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stadium:stadiumName
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getTeamFromStadium: " + err);
      });
    return json;
  };

  export const getTeamInfo = async (clubName) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/getteaminfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clubName:clubName
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in getTeamFromStadium: " + err);
      });
    return json;
  };

  export const registerUser = async (username, email, gender, birthdate, favoriteClub) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/registeruser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:username, 
        email:email, 
        gender:gender, 
        birthdate:birthdate, 
        favoriteClub:favoriteClub
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in registerUser: " + err);
      });
    return json;
  };

  export const topTenFouls = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/fouls", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenFouls: " + err);
      });
    return json;
  };

  export const topTenYellowCards = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/yellowcards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenYellowCards: " + err);
      });
    return json;
  };

  export const topTenShots = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/shots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenShots: " + err);
      });
    return json;
  };
  
  export const topTenMatches = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/matcheswon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenMatches: " + err);
      });
    return json;
  };
  
  export const topTenHomeMatches = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/homematcheswon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenHomeMatches: " + err);
      });
    return json;
  };

  export const topTenPerSeason = async () => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/topten/perseason", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      // }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenPerSeason: " + err);
      });
    return json;
  };
  
  export const viewReviews = async (matchDate, homeTeam, awayTeam) => {
    //Working
    const json = await fetch( "https://tftu2wr4ta.execute-api.eu-central-1.amazonaws.com/Final/viewreviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        matchDate:matchDate, 
        homeTeam:homeTeam, 
        awayTeam:awayTeam
      }),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("Error in topTenPerSeason: " + err);
      });
    return json;
  };
  