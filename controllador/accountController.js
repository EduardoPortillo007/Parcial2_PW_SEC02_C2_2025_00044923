class userData {
  constructor(id, isActive, picture, balance, client, gender) {
    this.id = id;
    this.isActive = isActive;
    this.picture = picture;
    this.balance = balance;
    this.client = client;
    this.gender = gender;
  }
}

var user1 = new userData(
  1,
  true,
  "https://www.meme-arsenal.com/memes/98363c1833a09db5076f525cb7cafeeb.jpg",
  1250.75,
  "Josefina Lopez",
  "Femenino"
);
var user2 = new userData(
  2,
  true,
  "https://i.pinimg.com/736x/1b/54/1b/1b541be4f5b0914cfbd21a9844a2f77b.jpg",
  850.5,
  "David Martinez",
  "Masculino"
);
var user3 = new userData(
  3,
  false,
  "https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg",
  2100.25,
  "Tory Chaika",
  "Femenino"
);
var user4 = new userData(
  4,
  true,
  "https://i1.sndcdn.com/artworks-000441428217-xv4d2e-t1080x1080.jpg",
  175,
  "Monika Dokidoki",
  "Femenino"
);
var user5 = new userData(
  5,
  true,
  "https://www.svg.com/img/gallery/things-only-adults-notice-about-birdo-from-the-mario-games/l-intro-1684229875.jpg",
  3200.8,
  "Bibi Romiro",
  "Femenino"
);
var user6 = new userData(
  6,
  true,
  "https://images.cults3d.com/szKWVgxC2gCn2zOsDpznjO5n7M8=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/15789945/illustration-file/3bd61a4b-7fa9-4008-a0cc-b82ea26f4d7d/rY3LgYr.jpg",
  95.3,
  "Jhon China",
  "Masculino"
);
var user7 = new userData(
  7,
  false,
  "https://i.pinimg.com/736x/f3/1e/e7/f31ee73491d5ef9bde826b81c8fd6d2a.jpg",
  450.6,
  "Fiona Torres",
  "Femenino"
);

const users = [user1, user2, user3, user4, user5, user6, user7];

const getAllAccount = (req, res) => {
  try {
    const resultado = {
      count: users.length,
      data: users,
    };
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = (req, res) => {
  try {
    const id = req.params.id;
    const cuenta = users;
    for (let i = 0; i < cuenta.length; i++) {
      if (cuenta[i].id == id) {
        return res.json({
          finded: true,
          account: cuenta[i],
        });
      }
    }
    return res.json({
      finded: false,
      account: null,
    });
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

const getByQuery = (req, res) => {
  try {
    const query = req.query;
    const item = users;
    const group = [];
    for (let i = 0; i < item.length; i++) {
      let match = false;

      if (query.id && item[i].id == query.id) {
        match = true;
      }

      if (
        query.client &&
        item[i].client.toLowerCase().includes(query.client.toLowerCase())
      ) {
        match = true;
      }

      if (
        query.gender &&
        item[i].gender.toLowerCase().includes(query.gender.toLowerCase())
      ) {
        match = true;
      }

      if (match) {
        group.push(item[i]);
      }
    }

    if (group.length === 0) {
      res.json({
        finded: false,
        account: null,
      });
    } else if (group.length === 1) {
      res.json({
        finded: true,
        account: group[0],
      });
    } else {
      res.json({
        finded: true,
        data: group,
      });
    }
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

const getByBalance = (req, res) => {
  try {
    let totalBalance = 0;
    let active = false; 

    for (let i = 0; i < users.length; i++) {
            if (users[i].isActive) {
                totalBalance += users[i].balance;
                active = true;
            }
        }
        
        res.json({
            status: active,
            accountBalance: totalBalance
        });
  } catch (error) {
    res.status(500).json({
      finded: false,
      error: error.message,
    });
  }
};

module.exports = { getAllAccount, getById, getByQuery, getByBalance };