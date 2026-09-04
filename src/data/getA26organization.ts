

import { parseSemester } from 'utils'

const organisation = `
    ref: a26
    starts:2026/08/26
    ends:2027/01/31
    //Semaine de rentrée (31 août - 05 sept) : cours uniquement
    '2026/08/31-2026/08/31-x-x-x',
    '2026/09/01-2026/09/05-x-x-x',

    // Septembre
    '2026/09/07-2026/09/12-A-x-x',
    '2026/09/14-2026/09/19-B-x-x',
    '2026/09/21-2026/09/26-A-x-x',
    '2026/09/28-2026/09/30-B-x-x',

    // Octobre
    '2026/10/01-2026/10/03-B-x-x',
    '2026/10/05-2026/10/10-A-x-x',
    '2026/10/12-2026/10/14-B-x-x',
    '2026/10/15-2026/10/15-x-C-x', // Jeudi neutralisé / sans cours
    '2026/10/16-2026/10/17-B-x-x',
    '2026/10/19-2026/10/19-B-x-Jeudi', // Lundi rattrapé en Jeudi B3
    '2026/10/20-2026/10/24-A-x-x',
    '2026/10/26-2026/10/31-x-H-x', // Vacances Toussaint

    // Novembre
    '2026/11/02-2026/11/02-A-x-x',
    '2026/11/03-2026/11/07-B-x-x',
    '2026/11/09-2026/11/09-B-x-x',
    '2026/11/10-2026/11/10-A-x-Mercredi', // Mardi rattrapé en Mercredi A5
    '2026/11/11-2026/11/11-x-C-x', // Férié (Armistice)
    '2026/11/12-2026/11/14-A-x-x',
    '2026/11/16-2026/11/21-B-x-x',
    '2026/11/23-2026/11/28-A-x-x',
    '2026/11/30-2026/11/30-B-x-x',

    // Décembre
    '2026/12/01-2026/12/05-B-x-x',
    '2026/12/07-2026/12/12-A-x-x',
    '2026/12/14-2026/12/19-B-x-x',
    '2026/12/21-2026/12/31-x-H-x', // Vacances Noël (partie 2026)

    // Janvier 2027
    '2027/01/01-2027/01/02-x-H-x', // Vacances Noël (partie 2027)
    '2027/01/04-2027/01/05-B-x-x',
    '2027/01/06-2027/01/06-B-x-Samedi', // Mercredi rattrapé en Samedi B7
    '2027/01/07-2027/01/09-x-F-x', // Période d'examens finaux
    '2027/01/11-2027/01/16-x-F-x',
 `

const A26organization = parseSemester(organisation, 'A26')

export default A26organization
