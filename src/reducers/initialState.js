export default {
  auth: {
    isLoggedIn: false,
    user: {},
    error: null
  },
  posts: {
    list: [{ title: "cole" }, { title: "cole234" }],
    error: null
  },
  pieces: {
    error: null,
    markers: [
      {
        address: "City Hall LRT Station (Third St. S.E.)",
        art_id: "P2013.002.001",
        artist: "Cliff Garten",
        desc1:
          "Referencing the idea of the living room or waiting area, there are four chandelier-like hanging sculptures in each canopy of the east and west gateway stations that give the waiting areas of the platforms a different quality. Additionally, their changing light show is a pleasant surrounding while waiting for the train.",
        latitude: "51.0462987504574",
        location: {
          type: "Point",
          coordinates: [-114.056673544737, 51.046298750457]
        },
        longitude: "-114.056673544737",
        short_desc:
          "This interactive public art installation consists of 20 components: two large-scale vertical sculptures, plus three hanging works, on four stations located at either end of the Seventh Avenue LRT line.",
        tab_name: "Downtown",
        title: "Luminous Crossings",
        website:
          "https://www.calgary.ca/CSPS/Recreation/Pages/Public-Art/Downtown-Gateway-LRT-Stations.aspx"
      },
      {
        address: "Falconridge Blvd. N.E. at Falworth Rd. N.E. (N.E. corner)",
        art_id: "UB22",
        artist: "Natalie McDonald",
        desc1:
          "The Utility Box Program started in 2010 as a pilot project initiated by The City of Calgary Roads. Initially conceived as a highly successful graffiti abatement measure, widespread popularity enabled the program to grow and become permanent in 2011.",
        latitude: "51.1029217675248",
        location: {
          type: "Point",
          coordinates: [-113.95588525491, 51.102921767525]
        },
        longitude: "-113.95588525491",
        tab_name: "Temporary Works",
        title: "Utility Box",
        website:
          "https://www.calgary.ca/CSPS/Recreation/Pages/Public-Art/Utility-Box-Public-Art-Program.aspx"
      }
    ]
  }
};
