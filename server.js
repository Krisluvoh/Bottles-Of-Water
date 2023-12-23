const express = require('express');
const jsxViewEngine = require('jsx-view-engine');
const app = express();
const PORT = 3000;

// Set up jsx view engine
app.engine('jsx', jsxViewEngine());
app.set('views', './views');
app.set('view engine', 'jsx');


// Define another route - /Home

app.get('/', (req, res) => {
    // res.send('99 Bottles of water on the wall')
    res.render('Home', {bottlesLeft:99})
  })
  
  app.get('/:number_of_bottles', (req, res) => {
    const bottles = req.params.number_of_bottles;
    const nextBottle = bottles - 1;
    if (bottles > 0) {
      res.render('Bottles', { bottles, nextBottle });
    } else {
      res.render('NoMore');
    }
  });
    
    
// ===== Tell the app to listen on port 3000 =====
// for HTTP requests from clients
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});