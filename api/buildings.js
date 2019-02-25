export default function (req, res, next) {

  process.env.baseUrl= "http://localhost:3000/"

  res.send([
    {
      name:'23 Marina',
      description : '23 Marina is an 88-story, 392.8 m (1,289 ft) residential skyscraper in Dubai, United Arab Emirates. It was the world\'s tallest all-residential building until the completion of the nearby Princess Tower.[5] The tower has 57 swimming pools and each duplex in the tower is equipped with its own private elevator.',
      image : 'http://localhost:3000/3-marina.jpg',
      slug : '23-marina'
    },
    {
      name:'Princess Tower',
      description : '23 Marina is an 88-story, 392.8 m (1,289 ft) residential skyscraper in Dubai, United Arab Emirates. It was the world\'s tallest all-residential building until the completion of the nearby Princess Tower.[5] The tower has 57 swimming pools and each duplex in the tower is equipped with its own private elevator.',
      image : 'http://localhost:3000/princesstower.jpg',
      slug : 'princess-tower'
    },
    {
      name:'Marina Pinnacle',
      description : '23 Marina is an 88-story, 392.8 m (1,289 ft) residential skyscraper in Dubai, United Arab Emirates. It was the world\'s tallest all-residential building until the completion of the nearby Princess Tower.[5] The tower has 57 swimming pools and each duplex in the tower is equipped with its own private elevator.',
      image : 'http://localhost:3000/marina-pinnacle.jpg',
      slug : 'marina-pinnacle'
    },
     {
      name:'The Torch',
      description : '23 Marina is an 88-story, 392.8 m (1,289 ft) residential skyscraper in Dubai, United Arab Emirates. It was the world\'s tallest all-residential building until the completion of the nearby Princess Tower.[5] The tower has 57 swimming pools and each duplex in the tower is equipped with its own private elevator.',
      image : 'http://localhost:3000/torch.jpg',
       slug : 'the-torch'
    },

  ])
}
