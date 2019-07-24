import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldShowPlayLink: false
    };
  }

  render = () => {
    return (
      <div className="landing">
        <input style={{ margin: '10px' }} type="text" id="customId" defaultValue="AAA" /><br />
        <input style={{ margin: '10px' }} type="button" value="Set Initials" onClick={this.DoLoginCurrentUser} /><br />
        <Link style={this.state.shouldShowPlayLink ? null : { display: 'none' }} className="start-btn" to="/game">
          <div>Play Geoguesser</div>
        </Link>
      </div>
    );
  }

  DoLoginCurrentUser = () => {
    /*eslint-disable no-undef*/
    PlayFab.settings.titleId = process.env.REACT_APP_PLAYFAB_GAME_ID;
    var loginRequest = {
      // Currently, you need to look up the correct format for this object in the API-docs:
      // https://api.playfab.com/Documentation/Client/method/LoginWithCustomID
      TitleId: PlayFab.settings.titleId,
      CustomId: document.getElementById("customId").value,
      CreateAccount: false
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, this.LoginCallback);
  }

  LoginCallback = (result, error) => {
    if (result !== null) {
      PlayFabClientSDK.UpdateUserTitleDisplayName({ DisplayName: document.getElementById("customId").value }, this.updateUserDisplayNameCallback);
      document.cookie = `geoguessr_session_cookie=${result.data.SessionTicket}`;
      document.cookie = `geoguessr_initials=${document.getElementById("customId").value}`;
      console.log(`login result: ${JSON.stringify(result)}`);
    } else if (error !== null) {
      console.error(`something went wrong with the login request...${JSON.stringify(error)}`);
    }
  }

  updateUserDisplayNameCallback = (result, error) => {
    if (result !== null) {
      console.log(`display name updated: ${JSON.stringify(result)}`);
      this.setState({
        shouldShowPlayLink: true
      });
    } else if (error !== null) {
      console.error(`something went wrong with the login request...${JSON.stringify(error)}`);
    }
  };
};



export default Landing;
