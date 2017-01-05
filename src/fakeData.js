const fakeData = {
  id: 1,
  name: "Matt Kaufman",
  imgsrc: "",
  cohort: "1608",
  path: [
    {
      name: "Honeoye Falls, NY",
      city: "Honeoye Falls, NY",
      state: "NY",
      lat: 42.952286,
      lon: -77.590276,
      type: "hometown",
      desc:"Home!"
    },
    {
      name: "Ithaca College",
      city: "Ithaca, NY",
      state: "NY",
      lat: 42.443961,
      lon: -76.501881,
      type: "education",
      desc: "studied finance"
    },
    {
      name: "Binghamton University",
      city: "Binghamton, NY",
      state: "NY",
      lat: 42.098687,
      lon: -75.917974,
      type: "education",
      desc: "studied engineering"
    },
    {
      name: "Engineer",
      city: "Rochester, NY",
      state: "NY",
      lat: 43.161030,
      lon: -77.610922,
      type: "work",
      desc: "built robots and shit"
    },
    {
      name: "Turing",
      city: "Denver",
      state: "CO",
      lat: 39.739236,
      lon: -104.990251,
      type: "work",
      desc: "front end engineering"
    }
  ]
}

var mattPath = [
    [42.952286, -77.590276],
    [42.443961, -76.501881],
    [42.098687, -75.917974],
    [43.161030, -77.610922],
    [39.739236, -104.990251]
];

export default fakeData;
