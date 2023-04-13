git initconst db = {
    test: {
      username: "test",
      password: "test",
    },
    testhashed: {
      username: "testhashed",
      password: "$2a$10$7WK77kJZ0qzrcgOoE3MszOWuPz2bzPueuSCePScbQnkKwCUx2045q",
    },
  };



const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const app = express()
app.use(express.json())
app.use(cors())



app.post("/login", (req, res) => {

    let {exUsername,exUserpass} = req.body
    
    console.log(exUsername,exUserpass)

    if(exUsername === db.test.username && exUserpass === db.test.password)
    {
        res.send('ACCESS GRANTED')
    }
    else 
    {   
        res.send('WRONG PASSWORD')
    }  
  
  });
  
  // Handle user registration.
  app.post("/register", (req, res) => {

    let {nUsername,nUserpass} = req.body

    if (!db[nUsername]) {
        // If it doesn't, create a new user and store it in the database
        db[nUsername] = { nUsername, nUserpass };
        res.send('USER CREATED GO AND LOGIN')
        // Display a success message to the user
        //res.session.success = "Registration successful! You can now log in.";
      } else {
        res.send('USER EXIST')
        // If the user already exists, display an error message
        //req.session.error = "Unable to create a new user. Try logging in.";
      }

    //res.send("HELLO")
   
  });

app.listen(4000, () => console.log("UP and Running"))
