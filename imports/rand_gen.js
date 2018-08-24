import faker from 'faker';

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
function randomBetween(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomElement(arr) {
    return arr[randomBetween(0,(arr.length - 1))];
}
function weightedRandom(spec) {
    let i, sum=0, r=Math.random();
    for (i in spec) {
        sum += spec[i].proc;
        if (r <= sum) return spec[i].type;
    }
} 
function randomLetter() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    return possible.charAt(Math.floor(Math.random() * possible.length));
}
const repeat = x => f => {
    if (x > 0) {
        f();
        repeat (x - 1) (f);
    }
};
  

const depts = [
    {
        name: "Command",
        crew: [
            {
                job: "Captain",
                traitor: false,
                changeling: true 
            },
            {
                job: "HoP",
                traitor: false,
                changeling: true 
            },
            {
                job: "HoS",
                traitor: false,
                changeling: true 
            },
            {
                job: "CE",
                traitor: false,
                changeling: true 
            },
            {
                job: "CMO",
                traitor: false,
                changeling: true 
            },
            {
                job: "RD",
                traitor: false,
                changeling: true 
            },
            {
                job: "QM",
                traitor: false,
                changeling: true 
            }
        ]
    },
    {
        name: "Security",
        crew: [
            {
                job: "Warden",
                traitor: true,
                changeling: true
            },
            {
                job: "Sec Officer (Arrivals)",
                traitor: true,
                changeling: true
            },
            {
                job: "Sec Officer (Medical)",
                traitor: true,
                changeling: true
            },
            {
                job: "Sec Officer (Supply)",
                traitor: true,
                changeling: true
            },
            {
                job: "Sec Officer (Science)",
                traitor: true,
                changeling: true
            },
            {
                job: "Sec Officer (Engineering)",
                traitor: true,
                changeling: true
            },
            {
                job: "Detective",
                traitor: true,
                changeling: true,
                proc: 0.5
            },
            {
                job: "Lawyer",
                traitor: true,
                changeling: true,
                proc: 0.5
            }
        ]
    },
    {
        name: "Engineering",
        crew: [
            {
                job: "Engineer",
                traitor: true,
                changeling: true,
                min: 2,
                max: 3
            },
            {
                job: "Atmos Tech",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Comms Tech",
                traitor: true,
                changeling: true,
                proc: 0.5
            }
        ]
    },
    {
        name: "Medical",
        crew: [
            {
                job: "Doctor",
                traitor: true,
                changeling: true,
                min: 2,
                max: 3
            },
            {
                job: "Chemist",
                traitor: true,
                changeling: true,
                proc: 0.5
            },
            {
                job: "Surgeon",
                traitor: true,
                changeling: true,
                proc: 0.5
            },
            {
                job: "Virologist",
                traitor: true,
                changeling: true,
                proc: 0.5
            }
        ]
    },
    {
        name: "Science",
        crew: [
            {
                job: "Roboticist",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Geneticist",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "R&D Tech",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Toxins Tech",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Xenobiologist",
                traitor: true,
                changeling: true,
                max: 2
            }
        ]
    },
    {
        name: "Supply",
        crew: [
            {
                job: "Cargo Tech",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Miner",
                traitor: true,
                changeling: true,
                max: 3
            }
        ]
    },
    {
        name: "Service",
        crew: [
            {
                job: "Assistant",
                traitor: true,
                changeling: true,
                min: 3,
                max: 8
            },
            {
                job: "Bartender",
                traitor: true,
                changeling: true
            },
            {
                job: "Chef",
                traitor: true,
                changeling: true
            },
            {
                job: "Curator",
                traitor: true,
                changeling: true
            },
            {
                job: "Chaplain",
                traitor: true,
                changeling: true,
                proc: 0.5
            },
            {
                job: "Botanist",
                traitor: true,
                changeling: true,
                max: 2
            },
            {
                job: "Janitor",
                traitor: true,
                changeling: true
            },
            {
                job: "Clown",
                traitor: true,
                changeling: true,
                proc: 0.1
            }
        ]
    },
    {
        name: "Silicon",
        crew: [
            {
                job: "AI",
                traitor: false,
                changeling: false
            },
            {
                job: "Cyborg",
                traitor: false,
                changeling: false,
                max: 3
            },
            {
                job: "Drone",
                traitor: false,
                changeling: false,
                max: 8
            }
        ]
    }
];

export const generateCrewMembers = (doNotGenArray) => {
    let results = [];
    depts.forEach((dept,index,depts) => {
        dept.crew.forEach((crewSlot,idx,crew) => {
            const min = crewSlot.hasOwnProperty('min') ? crewSlot.min : 1;
            const max = crewSlot.hasOwnProperty('max') ? crewSlot.max : 1;
            const proc = crewSlot.hasOwnProperty('proc') ? crewSlot.proc : 1;

            let iter = randomBetween(min, max);

            if (!doNotGenArray.includes(crewSlot.job)) {
                if (Math.random() < proc) {
                    repeat(iter)(()=>{
                        let crewMemberBase = clone(crewMember);
                        crewMemberBase.name = assignAppropriateName(crewSlot.job);
                        crewMemberBase.job = crewSlot.job;
                        crewMemberBase.dept = dept.name; 
                        crewMemberBase.traitor = crewSlot.traitor;
                        crewMemberBase.changeling = crewSlot.changeling;
                        results.push(crewMemberBase);
                    });
                }
            }
        });
    });
    return results;
}
function assignAppropriateName(job) {
    switch (job) {
        case "AI":
            return faker.hacker.noun().toUpperCase().replace(/(.)/g,"$1.");
        case "Cyborg":
            var name = faker.hacker.verb() + randomElement(["bot","tron","-o-matic","borg","machine"]);
            if (Math.random() < 0.3) {
                name += (" " + randomBetween(1,9) + "000");
            }
            var cap = name.charAt(0).toUpperCase() + name.substr(1);
            return cap;
        case "Drone":
            var name = randomLetter() + randomBetween(1,9) + "-" + randomLetter() + randomBetween(1,9);
            return name;
        default: 
            return faker.name.findName();
    }
}
export const generateAntags = (array) => {
    var numAntagsToGenerate = Math.floor(array.length / 8);
    var antagsToGenerate = [];
    repeat(numAntagsToGenerate)(() => {
        let type = weightedRandom(antags);
        let antagBase = clone(antag);
        antagBase.type = type;
        antagsToGenerate.push(antagBase);
    });

    let changelingCount = antagsToGenerate.filter(antag => {
        return antag.type === "changeling";
    }).length;
    let traitorCount = antagsToGenerate.filter(antag => {
        return antag.type === "traitor";
    }).length;

    antagsToGenerate.forEach(currentAntag => {
        var objectives = [];
        var objCount = randomBetween(2,4);
        switch (currentAntag.type) {
            case "ai":
                let obj = randomElement(missions.ai);
                let objBase = clone(antagObjective);
                objBase.type = obj.objective;
                objectives.push(objBase);
                break;
            case "changeling":
                objectives.push(randomElement(endMissions.both.concat(endMissions.changeling)));
                repeat(objCount)(() => {
                    let obj = randomElement(missions.both.concat(missions.changeling).filter(mission => {
                        return (!mission.hasOwnProperty('minAntags')) || (mission.minAntags <= changelingCount);
                    }));
                    let objBase = clone(antagObjective);
                    objBase.type = obj.objective;
                    if (obj.hasOwnProperty('target')) { 
                        objBase.target = obj.target; 
                    } 
                    objectives.push(objBase);
                });
                break;
            case "traitor":
                objectives.push(randomElement(endMissions.both.concat(endMissions.traitor)));
                repeat(objCount)(() => {
                    let obj = randomElement(missions.both.concat(missions.traitor).filter(mission => {
                        return (!mission.hasOwnProperty('minAntags')) || (mission.minAntags <= traitorCount);
                    }));
                    let objBase = clone(antagObjective);
                    objBase.type = obj.objective;
                    if (obj.hasOwnProperty('target')) { 
                        objBase.target = obj.target; 
                    } 
                    objectives.push(objBase);
                });
                break;
        }

        currentAntag.objectives = objectives;
    });

    return antagsToGenerate;
};

function indexOfAI(array) {
    array.forEach((crew, i) => {
        if (crew.job == "AI") {
            return i;
        }
    });
    return -1;
}

export const assignAntags = (crewArray, antagArray) => {
    var capIsLing = false;
    var hopIsLing = false;

    var antagAI = null;
    var crewAI = crewArray.indexOf(crewArray.find(member => {
        member.job == "AI";
    }));
    if (crewAI >= 0) {
        if (indexOfAI(antagArray) >= 0) {
            antagAI = antagArray.splice(indexOfAI(antagArray),1);
            crewArray[crewAI].antag = antagAI;
        }
    }

    while (antagArray.length > 0) {
        var currentAntag = antagArray.pop();
        var crewMember = randomElement(crewArray);

        if (!crewMember[currentAntag.type]) {
            antagArray.push(currentAntag);
            continue;
        }

        if (crewMember.antag == null || !(RegExp(currentAntag.type).test(crewMember.antag.type))) {
            if (currentAntag.type.match(/changeling/)) {
                if (crewMember.job == "Captain") {
                    if (hopIsLing) {
                        antagArray.push(currentAntag);
                        continue;
                    } else {
                        capIsLing = true;
                    }
                }
                if (crewMember.job == "HoP") {
                    if (capIsLing) {
                        antagArray.push(currentAntag);
                        continue;
                    } else {
                        hopIsLing = true;
                    }
                }
            }
            setAntag(currentAntag, crewMember);
        } else {
            antagArray.push(currentAntag);
        }
    }

    return crewArray;
};

function setAntag(antag, crewMember) {
    if (crewMember.antag == null) {
        crewMember.antag = antag;
    } else {
        crewMember.antag.type = crewMember.antag.type + " + " + antag.type; 
        crewMember.antag.objectives = crewMember.antag.objectives.concat(antag.objectives);
    }
}

export const assignAntagTargets = (crewArray) => {
    crewArray.forEach(crewMember => {
        if (crewMember.antag != null)  {
            crewMember.antag.objectives.forEach(objective => {
                if (objective.target != null) {
                    switch (objective.target) {
                        case "obj":
                            objective.target = randomElement(highRisk);
                            break;
                        case "crew":
                            objective.target = getSomeoneElse(crewArray,crewMember.name).name;
                            break;
                        case "changeling":
                            objective.target = getSameAntagType(crewArray,"changeling",crewMember.name).name;
                            break;
                        case "traitor":
                            objective.target = getSameAntagType(crewArray,"traitor",crewMember.name).name;
                            break;
                    }
                }
            });
        }
    });

    return crewArray;
};
function getSomeoneElse(crewArray, ownName) {
    var member = randomElement(crewArray);
    if (member.name == ownName) {
        getSomeoneElse(crewArray,ownName);
    }
    return member;
}
function getSameAntagType(crewArray, ownType, ownName) {
    var member = getSomeoneElse(crewArray.filter(crew => {
        return crew.antag != null;
    }),ownName);
    if (!(RegExp(ownType).test(member.antag.type))) {
        getSameAntagType(crewArray, ownType, ownName);
    }
    return member;
}

const crewMember = {
    name: "",
    job: "",
    dept: "",
    traitor: false,
    changeling: false,
    antag: null
};
const antags = [
    {
        type: "ai",
        proc: 0.05
    },
    {
        type: "changeling",
        proc: 0.35
    },
    {
        type: "traitor",
        proc: 0.6
    },
];
const antag = {
    type: "",
    objectives: []
};
const antagObjective = {
    type: ""
};
const highRisk = [  "Cpt.Laser",    "Hand Teleporter",  "Cpt.Jetpack",      "AI Card",
                    "Adv.Magboots", "Blueprints",       "Secret Docs",      "Plutonium",
                    "Supermatter",  "Plasma Tank",      "Slime Extract",    "Cpt.Medal",
                    "Hypospray",    "Fukken Disk",      "Ablative Vest",    "Teleport Armor"  ];
const missions = {
    both: [
        {
            objective: "steal",
            target: "obj"
        },
        {
            objective: "assassinate",
            target: "crew"
        },
        {
            objective: "maroon",
            target: "crew"
        }
    ],
    changeling: [
        {
            objective: "extract",
        },
        {
            objective: "extract most",
            minAntags: 2
        },
        {
            objective: "absorb",
            minAntags: 2,
            target: "changeling"
        },
        {
            objective: "impersonate dept",
            minAntags: 3,
            isTeam: true
        },
        {
            objective: "impersonate heads",
            minAntags: 3,
            isTeam: true
        }
    ],
    traitor: [
        {
            objective: "protect",
            target: "crew"
        },
        {
            objective: "exchange",
            minAntags: 2,
            target: "traitor"
        },
        {
            objective: "doublecross",
            minAntags: 2,
            target: "traitor"
        }
    ],
    ai: [
        {
            objective: "assassinate",
            target: "crew"
        },
        {
            objective: "protect",
            target: "crew"
        },
        {
            objective: "no organics"
        },
        {
            objective: "no nonhumans"
        },
        {
            objective: "8 cyborgs"
        }
    ]
};
const endMissions = {
    both: [
        { 
            type: "escape" 
        }
    ],
    changeling: [
        {
            type: "escape as", 
            target: "crew"
        }
    ],
    traitor: [
        {
            type:"escape alone"
        },
        {
            type:"martyrdom"
        }
    ]
};


/**
 * MVP:
 *  crew generation
 *  color-code table rows based on job sector
 *  antag selection
 *  antag mission generation/assignment
 *  no antag/criminal status dropdowns yet, simple stringify instead
 */



/*
make some shit such that:
    mongo gets filled with random crew data, according to how many there should be
        fields
            criminal records {
                crime
                arrested y/n
                sentence {
                    served y/n
                    brig
                    prison
                    gulag
                    death y/n ("reassignment")
                }
            }
            implants y/n {
                mindshield
                loyalty
                tracker
                chem
                syndie {
                    freedom
                    storage
                    uplink
                    adrenal
                    radio
                }
            }
  
        can click to see criminal records/antag status
        can set:
            criminal records
            implants

    client listens to mongo, fetches cursor of these objects/docs 
    drop cursor.fetch() array into datagrid
    probably background color the rows based on job sector

    gamemode: tatorling, rev, cult, nuke
    count crew, generate antags
    revcult: 
            floor(crew/9) revheads
            floor(crew/6) cultists, of which 1 is cult leader

    */