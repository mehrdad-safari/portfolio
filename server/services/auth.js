const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

 const config = require('../../env-config');
 const NAMESPACE = config["process.env.NAMESPACE"];
 const CLIENT_ID = config["process.env.CLIENT_ID"];





// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://mehrdadsafari.auth0.com/.well-known/jwks.json'
  }),
  audience: CLIENT_ID ,
  issuer: 'https://mehrdadsafari.auth0.com/',
  algorithms: ['RS256']
})


exports.checkRole = role => (req, res, next) => {
 
 
  const user = req.user;
  const userRole =  user[NAMESPACE + '/role'];
 
 if (user && userRole && (userRole[0] === role[0])) {
    next();
 } else {
   return res.status(401).send({title: userRole +'--'+role , detail: 'You are not authorized to access this data'})
 }
}
