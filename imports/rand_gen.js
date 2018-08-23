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
            },
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
                traitor: true,
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

const generateCrewMembers = (doNotGenArray) => {
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
                        crewMemberBase.name = faker.name.findName();
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

const generateAntags = (mongoCollection) => {
    let antagsToGenerate = Math.floor(mongoCollection.count() / 8);
    repeat(antagsToGenerate)(() => {
        // hooboy big todo
    });
}

/*
    tatorling: 
            randomly determine type? 
            there should always be at least 2; floor(crew / 8)?
            first check if malf AI; worth 2 antags (so low crew count won't get additional ones)
            then divvy up the others randomly
            then generate objectives (need to know how many per type first)
                if enough antags for a multi-antag objective, add it to all relevant
                each antag gets an end objective
                each antag gets 2-3 additional objectives
                    per objective, assign targets
            THEN AND ONLY THEN assign antag fields to crew: 
                captain + NPC heads can't be traitors
                if hop is changeling, captain can't be and vice versa
                existing traitors cannot receive more traitor objectives
                same with changelings
                HOWEVER changelings can receive traitor objectives and vice versa
*/

const crewMember = {
    name: "",
    job: "",
    dept: "",
    traitor: false,
    changeling: false,
    antag: null
};
const antag = {
    type: "",
    objectives: []
}
const antagObjective = {
    type: "",
    target: ""
}

const highRisk = [  "Cpt.Laser",    "Hand Teleporter",  "Cpt.Jetpack",      "AI Card",
                    "Adv.Magboots", "Blueprints",       "Secret Docs",      "Plutonium",
                    "Supermatter",  "Plasma Tank",      "Slime Extract",    "Cpt.Medal",
                    "Hypospray",    "Fukken Disk",      "Ablative Vest",    "Teleport Armor"  ]
const missions = {
    both: [
        {
            objective: "steal",
            minAntags: 1
        },
        {
            objective: "assassinate",
            minAntags: 1
        },
        {
            objective: "maroon",
            minAntags: 1
        }
    ],
    changeling: [
        {
            objective: "extract",
            minAntags: 1
        },
        {
            objective: "extract most",
            minAntags: 2
        },
        {
            objective: "absorb",
            minAntags: 2
        },
        {
            objective: "impersonate dept",
            minAntags: 3
        },
        {
            objective: "impersonate heads",
            minAntags: 3
        }
    ],
    traitor: [
        {
            objective: "protect",
            minAntags: 1
        },
        {
            objective: "exchange",
            minAntags: 2
        },
        {
            objective: "doublecross",
            minAntags: 2
        }
    ]
};
const endMissions = {
    both: ["escape"],
    changeling: ["escape as"],
    traitor: ["escape alone","martyrdom"]
}

export default { generateCrewMembers, generateAntags };


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

    generate crew 
    gamemode: tatorling, rev, cult
    count crew, generate antags
    revcult: 
            floor(crew/9) revheads
            floor(crew/6) cultists, of which 1 is cult leader

    */