import React from 'react';
import './App.css';
import basketballData from './CollegeBasketballTeams.json';

/*
    Mission #9 Assignment
    IS 413 – Hilton
    With March Madness upon us, we want to create a website that lists out
    information about all the colleges in NCAA Basketball. The attached file contains
    a JSON file that has information for the basketball teams:
    https://byu.box.com/s/2wqd1pl166n4i39whcu8vircol19eozx
    Download the JSON file and paste it into your “src” folder.
    Using your setup in Visual Studio Code, build a website in React that has at least
    three different functions/components in addition to the App function:
    #1: A heading section at the top introducing the user to what the site is.
    #2: A team “card” that contains the following information about each school:
    • School Name
    • Mascot Name
    • Location (City, State)
    #3: A list of team cards that shows all the teams on the list.
    Incorporate the components into your website to display a list of all the college
    basketball teams. You will need to figure out how to make the connection to the
    JSON file to pull the data rather than building the JSON in a const in the code itself
    like we did in the videos. (#notcoveredinthevideos)
    Submit a link to the GitHub repository containing your project via Learning
    Suite.
*/

interface TeamProps {
    school: string;
    city: string;
    state: string;
    name: string;
}

class TeamCard extends React.Component<TeamProps> {
    render() {
        const oneTeam = this.props;
        return (
            <div className="card">
                <h2>{oneTeam.school}</h2>
                <p>Mascot: {oneTeam.name}</p>
                <p>
                    Location: {oneTeam.city}, {oneTeam.state}
                </p>
            </div>
        );
    }
}

function TeamList() {
    return (
        <div className="team-container">
            {basketballData.teams.map((oneTeam) => (
                <TeamCard {...oneTeam} />
            ))}
        </div>
    );
}

function Heading() {
    const marginStyle = {
        margin: '50px',
    };

    return (
        <div style={marginStyle}>
            <h1>March Madness</h1>
            <p>
                The most exciting time of the year is upon us: March Madness!
                Every year, the best college basketball programs in the country
                compete in a single-elimination tournament to see who will be
                crowned the national champion. With so many teams to keep track
                of and standings changing every week, it can be hard to keep
                track of everyone. That's where we come in. We've compiled a
                list of all the college basketball teams in the country, so you
                can stay up to date on all the action. Check out the list below
                and find your favorite team!
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Heading />
            <TeamList />
        </div>
    );
}

export default App;
