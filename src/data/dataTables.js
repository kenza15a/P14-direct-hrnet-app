const states = [
 
    {
        name: "Alabama",
        abbreviation: "AL",
    },
    {
        name: "Alaska",
        abbreviation: "AK",
    },
    {
        name: "American Samoa",
        abbreviation: "AS",
    },
    {
        name: "Arizona",
        abbreviation: "AZ",
    },
    {
        name: "Arkansas",
        abbreviation: "AR",
    },
    {
        name: "California",
        abbreviation: "CA",
    },
    {
        name: "Colorado",
        abbreviation: "CO",
    },
    {
        name: "Connecticut",
        abbreviation: "CT",
    },
    {
        name: "Delaware",
        abbreviation: "DE",
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC",
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM",
    },
    {
        name: "Florida",
        abbreviation: "FL",
    },
    {
        name: "Georgia",
        abbreviation: "GA",
    },
    {
        name: "Guam",
        abbreviation: "GU",
    },
    {
        name: "Hawaii",
        abbreviation: "HI",
    },
    {
        name: "Idaho",
        abbreviation: "ID",
    },
    {
        name: "Illinois",
        abbreviation: "IL",
    },
    {
        name: "Indiana",
        abbreviation: "IN",
    },
    {
        name: "Iowa",
        abbreviation: "IA",
    },
    {
        name: "Kansas",
        abbreviation: "KS",
    },
    {
        name: "Kentucky",
        abbreviation: "KY",
    },
    {
        name: "Louisiana",
        abbreviation: "LA",
    },
    {
        name: "Maine",
        abbreviation: "ME",
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH",
    },
    {
        name: "Maryland",
        abbreviation: "MD",
    },
    {
        name: "Massachusetts",
        abbreviation: "MA",
    },
    {
        name: "Michigan",
        abbreviation: "MI",
    },
    {
        name: "Minnesota",
        abbreviation: "MN",
    },
    {
        name: "Mississippi",
        abbreviation: "MS",
    },
    {
        name: "Missouri",
        abbreviation: "MO",
    },
    {
        name: "Montana",
        abbreviation: "MT",
    },
    {
        name: "Nebraska",
        abbreviation: "NE",
    },
    {
        name: "Nevada",
        abbreviation: "NV",
    },
    {
        name: "New Hampshire",
        abbreviation: "NH",
    },
    {
        name: "New Jersey",
        abbreviation: "NJ",
    },
    {
        name: "New Mexico",
        abbreviation: "NM",
    },
    {
        name: "New York",
        abbreviation: "NY",
    },
    {
        name: "North Carolina",
        abbreviation: "NC",
    },
    {
        name: "North Dakota",
        abbreviation: "ND",
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP",
    },
    {
        name: "Ohio",
        abbreviation: "OH",
    },
    {
        name: "Oklahoma",
        abbreviation: "OK",
    },
    {
        name: "Oregon",
        abbreviation: "OR",
    },
    {
        name: "Palau",
        abbreviation: "PW",
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA",
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR",
    },
    {
        name: "Rhode Island",
        abbreviation: "RI",
    },
    {
        name: "South Carolina",
        abbreviation: "SC",
    },
    {
        name: "South Dakota",
        abbreviation: "SD",
    },
    {
        name: "Tennessee",
        abbreviation: "TN",
    },
    {
        name: "Texas",
        abbreviation: "TX",
    },
    {
        name: "Utah",
        abbreviation: "UT",
    },
    {
        name: "Vermont",
        abbreviation: "VT",
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI",
    },
    {
        name: "Virginia",
        abbreviation: "VA",
    },
    {
        name: "Washington",
        abbreviation: "WA",
    },
    {
        name: "West Virginia",
        abbreviation: "WV",
    },
    {
        name: "Wisconsin",
        abbreviation: "WI",
    },
    {
        name: "Wyoming",
        abbreviation: "WY",
    },
];
const departmentsList = [
    { key: "1", name: "Sales" },
    { key: "2", name: "Marketing" },
    { key: "3", name: "Human resources" },
    { key: "4", name: "Engineering" },
    { key: "5", name: "Legal" },
];



const mockedEmployees=[

    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    { firstName:"Mohamed",
    lastName:"Raall",
    birthDate:"16-12-1970",
    startDate:"15-12-2022",
    street:"114 RUE cheese cake",
    city:"newyork",
    zipCode:5,
    state:"Virginia",
    departement:"Marketing" },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    }, {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
    {
        firstName:"lorant",
        lastName:"pariss",
        birthDate:"12-06-1990",
        startDate:"15-9-2023",
        street:"114 RUE NATCHO NATCHO",
        city:"paris",
        zipCode:75,
        state:"Wyoming",
        departement:"Legal" 
    },
];
export  { states, departmentsList,mockedEmployees };