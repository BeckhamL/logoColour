const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/logos', (req, res) => {
  res.send([{
    img: "messenger.png",
    name: "messenger",
    colours: [{
        hex: "#0078FF",
        rgb: "(0,120,255)",
        cmyk: "(78,54,0,0)"
      },
      {
        hex: "#00C6FF",
        rgb: "(0,198,255)",
        cmyk: "(63,1,0,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ],
    category: 'Technology'
  }, {
    img: "Snapchat.png",
    name: "snapchat",
    colours: [{
        hex: "#FFFC00",
        rgb: "(255,252,0)",
        cmyk: "(0,0,100,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,10)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ],
    category: "Technology"
  }, {
    img: "airbnb.png",
    name: "airbnb",
    colours: [{
      hex: "#FF585D",
      rgb: "(255,88,93)",
      cmyk: "(0,70,58,0)"
    }],
    category: "Technology"
  }, {
    img: "discord.png",
    name: "discord",
    colours: [{
      hex: "#7289DA",
      rgb: "(114,137,218)",
      cmyk: "(0.48,0.37,0.00,0.15)"
    }],
    category: "Technology"
  }, {
    img: "tinder.png",
    name: "tinder",
    colours: [{
        hex: "#FE3C72",
        rgb: "(254,60,114)",
        cmyk: "(0,89,33,0)"
      },
      {
        hex: "#fe615f",
        rgb: "(254,97,95)",
        cmyk: "(0.00,0.62,0.63,0.00)"
      }
    ],
    category: "Technology"
  }, {
    img: "bestbuy.png",
    name: "best buy",
    colours: [{
        hex: "#0A4ABF",
        rgb: "(10,74,191)",
        cmyk: "(91,76,0,0)"
      },
      {
        hex: "#F6EB16",
        rgb: "(246,235,22)",
        cmyk: "(7,0,97,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,0)"
      }
    ],
    category: "Retail"
  }, {
    img: "costco.png",
    name: "costco",
    colours: [{
        hex: "#E31837",
        rgb: "(227,24,55)",
        cmyk: "(5,100,83,1)"
      },
      {
        hex: "#005DAA",
        rgb: "(0,93,170)",
        cmyk: "(94,68,1,0)"
      }
    ],
    category: "Retail"
  }, {
    img: "redbull.png",
    name: "red bull",
    colours: [{
        hex: "#CC1E4A",
        rgb: "(204,31,75)",
        cmyk: "(13,100,66,2)"
      },
      {
        hex: "#FFC906",
        rgb: "(255,202,6)",
        cmyk: "(0,20,100,0)"
      }
    ],
    category: "foodBev"
  }, {
    img: "barnes.png",
    name: "barnes & noble",
    colours: [{
        hex: "#366251",
        rgb: "(54,98,81)",
        cmyk: "(78,41,69,29)"
      },
      {
        hex: "#C6BEB0",
        rgb: "(198,190,176)",
        cmyk: "(23,21,29,0)"
      }
    ]
  }, {
    img: "amazon.png",
    name: "amazon",
    colours: [{
        hex: "#FF9900",
        rgb: "(255,153,0)",
        cmyk: "(0,47,100,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "acer.png",
    name: "acer",
    colours: [{
      hex: "#83B81A",
      rgb: "(131,184,26)",
      cmyk: "(55,6,100,0)"
    }]
  }, {
    img: "lego.png",
    name: "lego",
    colours: [{
        hex: "#E3000B",
        rgb: "(227,0,11)",
        cmyk: "(4,100,100,1)"
      },
      {
        hex: "#FFED00",
        rgb: "(255,237,0)",
        cmyk: "(3,1,97,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "paypal.png",
    name: "paypal",
    colours: [{
        hex: "#00457C",
        rgb: "(0,69,124)",
        cmyk: "(100,57,0,40)"
      },
      {
        hex: "#0079C1",
        rgb: "(0,121,193)",
        cmyk: "(100,44,0,0)"
      }
    ]
  }, {
    img: "budlight.png",
    name: "bud light",
    colours: [{
        hex: "#061148",
        rgb: "(6,17,72)",
        cmyk: "(100,97,34,46)"
      },
      {
        hex: "#00A1E1",
        rgb: "(0,161,225)",
        cmyk: "(74,21,0,0)"
      }
    ]
  }, {
    img: "pokemon.png",
    name: "pokemon",
    colours: [{
        hex: "#FFCB05",
        rgb: "(255,203,5)",
        cmyk: "(0,20,100,0)"
      },
      {
        hex: "#3D7DCA",
        rgb: "(61,125,202)",
        cmyk: "(76,47,0,0)"
      },
      {
        hex: "#003A70",
        rgb: "(0,58,112)",
        cmyk: "(100,84,31,17)"
      }
    ]
  }, {
    img: "tmobile.png",
    name: "t-mobile",
    colours: [{
        hex: "#ED008C",
        rgb: "(237,0,140)",
        cmyk: "(0,99,1,0)"
      },
      {
        hex: "#999B9E",
        rgb: "(153,155,158)",
        cmyk: "(43,34,33,1)"
      }
    ]
  }, {
    img: "canon.png",
    name: "canon",
    colours: [{
      hex: "#BF1920",
      rgb: "(191,25,32)",
      cmyk: "(18,100,100,8)"
    }]
  }, {
    img: "twitter.png",
    name: "twitter",
    colours: [{
      hex: "#1DA1F2",
      rgb: "(29,161,242)",
      cmyk: "(69,26,0,0)"
    }]
  }, {
    img: "youtube.png",
    name: "youtube",
    colours: [{
        hex: "#FF0000",
        rgb: "(255,0,0)",
        cmyk: "(0,95,100,0)"
      },
      {
        hex: "#282828",
        rgb: "(40,40,40)",
        cmyk: "(0,0,0,100)"
      }
    ]
  }, {
    img: "linkedin.png",
    name: "linkedin",
    colours: [{
        hex: "#2867B2",
        rgb: "(40,103,178)",
        cmyk: "(87,61,0,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "twitch.png",
    name: "twitch",
    colours: [{
        hex: "#6441A4",
        rgb: "(100,65,164)",
        cmyk: "(69,75,0,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "coke.png",
    name: "coca-cola",
    colours: [{
      hex: "#F40009",
      rgb: "(244,0,0)",
      cmyk: "(4,100,95,0)"
    }]
  }, {
    img: "hulu.png",
    name: "hulu",
    colours: [{
      hex: "#3DBB3D",
      rgb: "(102,170,50)",
      cmyk: "(66,11,100,1)"
    }]
  }, {
    img: "reddit.png",
    name: "reddit",
    colours: [{
        hex: "#FF4500",
        rgb: "(255,69,0)",
        cmyk: "(0,87,100,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "whatsapp.png",
    name: "whatsapp",
    colours: [{
        hex: "#4AC959",
        rgb: "(74,201,89)",
        cmyk: "(66,0,87,0)"
      },
      {
        hex: "#455A64",
        rgb: "(69,90,100)",
        cmyk: "(75,55,47,24)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "pinterest.png",
    name: "pinterest",
    colours: [{
        hex: "#BD081C",
        rgb: "(189,8,28)",
        cmyk: "(18,100,100,9)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "mcdonalds.png",
    name: "mcdonalds",
    colours: [{
        hex: "#FFC72C",
        rgb: "(255,199,44)",
        cmyk: "(0,100,91,0)"
      },
      {
        hex: "#DA291C",
        rgb: "(218,41,28)",
        cmyk: "(0,30,94,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "oldnavy.png",
    name: "old navy",
    colours: [{
        hex: "#163E69",
        rgb: "(22,62,105)",
        cmyk: "(99,80,33,21)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "levi.png",
    name: "levi",
    colours: [{
        hex: "#C41230",
        rgb: "(196, 18, 48)",
        cmyk: "(0,100,79,20)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "pandora.png",
    name: "pandora",
    colours: [{
      hex: "#00A0EE",
      rgb: "(0,160,238)",
      cmyk: "(71,25,0,0)"
    }]
  }, {
    img: "wholefoods.png",
    name: "whole foods",
    colours: [{
      hex: "#00674B",
      rgb: "(0,103,75)",
      cmyk: "(90,35,78,26)"
    }]
  }, {
    img: "nintendo.png",
    name: "nintendo",
    colours: [{
      hex: "#E60012",
      rgb: "(230,0,18)",
      cmyk: "(3,100,100,1)"
    }]
  }, {
    img: "starbucks.png",
    name: "starbucks",
    colours: [{
        hex: "#00704A",
        rgb: "(0,112,74)",
        cmyk: "(100,0,78,42)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "asus.png",
    name: "asus",
    colours: [{
      hex: "#00539B",
      rgb: "(0,83,155)",
      cmyk: "(99,75,8,1)"
    }]
  }, {
    img: "periscope.png",
    name: "periscope",
    colours: [{
        hex: "#40A4C4",
        rgb: "(64,164,196)",
        cmyk: "(70,19,16,0)"
      },
      {
        hex: "#E94F3C",
        rgb: "(233,79,60)",
        cmyk: "(3,84,82,1)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "cvs.png",
    name: "cvs",
    colours: [{
      hex: "#CC0000",
      rgb: "(204,0,0)",
      cmyk: "(13,100,100,4)"
    }]
  }, {
    img: "tencent.png",
    name: "tencent",
    colours: [{
      hex: "#3458b0",
      rgb: "(52,88,176)",
      cmyk: "(0.7,0.5,0,0.31)"
    }]
  }, {
    img: "facebook.png",
    name: "facebook",
    colours: [{
        hex: "#4267B2",
        rgb: "(66,103,178)",
        cmyk: "(80,62,0,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "shopify.png",
    name: "shopify",
    colours: [{
        hex: "#64943E",
        rgb: "(100, 148, 62)",
        cmyk: "(0.32, 0, 0.58, 0.41)"
      },
      {
        hex: "#95BF47",
        rgb: "(149, 191, 71)",
        cmyk: "(0.21, 0, 0.62, 0.25)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "samsung.png",
    name: "samsung",
    colours: [{
        hex: "#034EA2",
        rgb: "(3,78,162)",
        cmyk: "(99,78,2,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "xbox.png",
    name: "xbox",
    colours: [{
      hex: "#107C10",
      rgb: "(16,124,16)",
      cmyk: "(87,26,100,15)"
    }]
  }, {
    img: "aldi.png",
    name: "aldi",
    colours: [{
        hex: "#001F78",
        rgb: "(0,31,120)",
        cmyk: "(100,95,22,15)"
      },
      {
        hex: "#00B5DB",
        rgb: "(0,181,219)",
        cmyk: "(72,6,9,0)"
      },
      {
        hex: "#F03D14",
        rgb: "(240,61,20)",
        cmyk: "(0,91,100,0)"
      },
      {
        hex: "#FA6E0A",
        rgb: "(250,110,10)",
        cmyk: "(0,70,100,0)"
      },
      {
        hex: "#FFBF45",
        rgb: "(255,191,69)",
        cmyk: "(0,27,84,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }, {
    img: "google.png",
    name: "google",
    colours: [{
        hex: "#4285F4",
        rgb: "(66,133,244)",
        cmyk: "(88,50,0,0)"
      },
      {
        hex: "#DB4437",
        rgb: "(219,68,55)",
        cmyk: "(0,78,85,12)"
      },
      {
        hex: "#F4B400",
        rgb: "(244,160,0)",
        cmyk: "(0,20,90,0)"
      },
      {
        hex: "#0F9D58",
        rgb: "(15,157,88)",
        cmyk: "(82,0,67,11)"
      }
    ]
  }, {
    img: "zappos.png",
    name: "zappos",
    colours: [{
        hex: "#0076BD",
        rgb: "(1,118,189)",
        cmyk: "(87,49,0,0)"
      },
      {
        hex: "#000000",
        rgb: "(0,0,0)",
        cmyk: "(0,0,0,0)"
      },
      {
        hex: "#ffffff",
        rgb: "(255,255,255)",
        cmyk: "(0,0,0,0)"
      }
    ]
  }])
});

app.get('/api/logos/:name', (req, res) => {

  console.log(res)
})

const port = process.env.PORT || 3000;

app.listen(port);
