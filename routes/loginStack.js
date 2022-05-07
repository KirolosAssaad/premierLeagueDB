import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from '../screens/login';
import Menu from '../screens/menu';
import addReview from '../screens/addReview';
import viewReviews from "../screens/viewReviews";
import playersByNationality from "../screens/playersByNationality";
import winsPerSeason from "../screens/mostWinsPerSeason";
import topTen from "../screens/topTen";
import teamFromStadium from "../screens/teamFromStadium";
import teamFromCity from "../screens/teamFromCity";
import playerFromPosition from "../screens/playerFromPosition";
import viewTeam from "../screens/viewTeam";
import viewPlayer from "../screens/viewPlayer";
import registerUser from "../screens/registerUser";


const screens = {
    Login: {
        screen: Login
    },
    registerUser: {
        screen: registerUser
    },
    Menu: {
        screen: Menu
    },
    addReview: {
            screen: addReview
        },
    viewReviews: {
        screen: viewReviews
    },
    playersByNationality: {
        screen: playersByNationality
    },
    winsPerSeason: {
        screen: winsPerSeason
    },
    topTen: {
        screen: topTen
    },
    teamFromStadium: {
        screen: teamFromStadium
    },    
    teamFromCity: {
        screen: teamFromCity
    },
    playerFromPosition: {
        screen: playerFromPosition
    },
    viewTeam: {
        screen: viewTeam
    },
    viewPlayer: {
        screen: viewPlayer
    },
}

const loginStack = createStackNavigator(screens);


export default createAppContainer(loginStack);