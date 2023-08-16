const spaceships = [];

function addSpaceship(name: string, pilot: string, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }
  spaceships.push(spaceship);
  alert(`The ship ${spaceship.name} was ssuccessfully registered.`)
}

function findSpaceship(name: string) {
    let spaceship: {
      name: string,
      pilot: string,
      crewLimit: string,
      crew: string[],
      inMission: boolean
    }
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship
}

function addCrewMember(member: string, spaceship: {name: string, crewLimit: number, crew: string[]}) {
  if (spaceship.crew.length >= spaceship.crewLimit) {
    alert(`${member} cant be added. The crew is full.`);
  } else {
    spaceship.crew.push(member);
    alert(`${member} added to the crew of ${spaceship.name}.`);
  }
}

function sendInMission(spaceship: {name: string, crewLimit: number, crew: string[], inMission: boolean}) {
  if (spaceship.inMission) {
    alert(`Cant send ${spaceship.name}. Ship already in mission.`);
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(`Cant send ${spaceship.name}. Not enough crew. Add more members.`);
  } else {
    spaceship.inMission = true;
    alert(`${spaceship.name} authorized and dispatched for mission.`)
  }
}