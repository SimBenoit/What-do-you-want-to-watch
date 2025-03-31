const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 5000;
    let randomNum;
    let currentIndex = 0;

    app.use(cors());

    const data = [
      { id: 1, name: 'Borpa.png' },
      { id: 2, name: 'BorpaChef.gif' },
      { id: 3, name: 'BorpaCop.gif' },
      { id: 4, name: 'BorpaKid.jpg' },
    ];

    app.get('/api/items', (req, res) => {
      do{
      randomNum = Math.floor(Math.random() *4);
      } while(currentIndex == randomNum);
      currentIndex=randomNum;
      //console.log(randomNum);
      res.json(data.at(randomNum));
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });