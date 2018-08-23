import faker from 'faker';

const crewSchema = {

};




export default { crewSchema,  };


/**
 * MVP:
 *  crew generation
 *  color-code table rows based on job sector
 *  antag selection
 *  antag mission generation/assignment
 *  no antag/criminal status dropdowns yet, simple stringify instead
 */

/*
    mission objectives
        grand theft
        assassinate/destroyAI
        maroon
        protect (traitor)
        exchange (traitor x2)
        trick exchange (traitor x2)
        extract 5-7 (changeling)
        extract most (changeling x2+)
        absorb (changeling x2+)
        impersonate dept (changeling x3+)
        impersonate heads (changeling x3+)
        end:
            escape
            escape alone
            escape as (changeling)
            martyrdom (traitor)
*/


/*
make some shit such that:
    need a percent-chance randgen? so that i can do if (proc(60)) { traitor: true } or whatever
    mongo gets filled with random crew data, according to how many there should be
        fields
            name
            job
            antag: null/{
                type
                missions [
                    {
                        objective
                        target
                    }
                ]
            }
            location?
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
           
    25 - 43 humans: 
        heads + depts
        + captain
        + hop
        + bartender
        + cook
        + librarian
        + janitor
        + 1-2 botanists
        + clown/mime if you're unlucky (1 in 10?)
    3 - 12 silicons 
*/