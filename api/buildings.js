export default function (req, res, next) {

  process.env.baseUrl= "http://localhost:3000/"

  res.send([
    {
      name:'23 Marina',
      description : '23 Marina is an 88-story, 392.8 m (1,289 ft) residential skyscraper in Dubai, United Arab Emirates. It was the world\'s tallest all-residential building until the completion of the nearby Princess Tower.[5] The tower has 57 swimming pools and each duplex in the tower is equipped with its own private elevator.',
      image : 'http://localhost:3000/23-marina.jpg',
      slug : '23-marina'
    },
    {
      name:'Princess Tower',
      description : 'The Princess Tower (Arabic: برج الأميرة‎) is a 101 story, 413.4 m (1,356 ft)[2] tall residential-only skyscraper located in the Marina district of Dubai, UAE.[4] Princess Tower is currently the third tallest building in Dubai, after the Burj Khalifa and the Marina 101 and the 29th tallest building in the world.[5] Princess Tower was the tallest residential building in the world from 2012 to 2015, when it was overtaken by 432 Park Avenue in New York City. ',
      image : 'http://localhost:3000/princesstower.jpg',
      slug : 'princess-tower'
    },
    {
      name:'Marina Pinnacle',
      description : `The Marina Pinnacle is a 77-floor tower in the Dubai Marina in Dubai, United Arab Emirates. The tower has a total structural height of 280 m (853 ft)[1] and 764 residential and commercial units.[2] Construction of the Marina Pinnacle has been completed in 2011.
        
        The tower topped out in December, 2010 with 96% completion and became 19th tallest building in Dubai. Handover process is started in July 2011 and it is still in progress. `,
      image : 'http://localhost:3000/marina-pinnacle.jpg',
      slug : 'marina-pinnacle'
    },
     {
      name:'The Torch',
      description : `The Marina Torch, also known as Dubai Torch, Dubai Torch Tower,[3] and The Torch,[4] is a residential skyscraper in Dubai Marina in Dubai, United Arab Emirates.
        
        The tower is 336.8 metres (1,105 ft) tall, with 79 floors above ground. It became the tallest residential building in the world in 2011, surpassing Q1 in Gold Coast, Australia. It lost the record in 2012 to Dubai\'s Elite Residence.
        The Marina Torch was damaged by fire on 21 February 2015 and again on 4 August 2017, while it was undergoing restorative work. `,
      image : 'http://localhost:3000/torch.jpg',
       slug : 'the-torch'
    },

  ])
}
