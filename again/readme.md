# For validating email and password 
- npm i validator
# For encrypting password
- npm i bcrypt
# For reading cookie 
- npm i cookie-parser 
 # For JWT 
 - npm i jsonwebtoken

 * in the production we hava to expire cookies also so we have to use {httpOnly:true} in this line ->  res.cookie("token", token,{httpOnly:true});

 # this will expire the cookie in 8 hour -> res.cookie("token", token,{expires:new Date(Date.now()+8*3600000)});