const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://mehrdadsafari-profile.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://mehrdadsafari-profile.herokuapp.com',
  'process.env.CLIENT_ID': '14HccZlcGlWcxwrW2IqzfoUokUQoK296'
}
