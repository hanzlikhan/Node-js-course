const express = require('express')
const app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.send('Welcome');
})
// this is not a good way to get any request like '/jokes' we shoudl access like '/api/v1/jokes'
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the chicken cross the road?",
      punchline: "To get to the other side!"
    },
    {
      id: 2,
      joke: "What's the difference between a cow and a chicken?",
      punchline: "A cow is a henhouse, and a chicken is a farmer's son!"
    },
    {
      id: 3,
      joke: "Why did the tomato turn red?",
      punchline: "It saw the salad dressing!"
    },
    {
      id: 4,
      joke: "Why did the scarecrow win an award?",
      punchline: "He was outstanding in his field of wisdom!"
    },
    {
      id: 5,
      joke: "What do you call a man who plays the piano?",
      punchline: "A pianist!"
    }
  ]
  res.send(jokes);
  });
const port  = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})