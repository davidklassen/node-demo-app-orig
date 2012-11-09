var request = require('supertest')
  , app = require(__dirname + '/../../app')
  
describe('Pages', function () {
  describe('GET /', function () {
    it('should redirect to "home"', function (done) {
      request(app)
        .get('/')
        .expect('location', '/home')
        .expect(302, done)
    })
  })
  
  describe('GET /home', function () {
    it('should return status code 200', function (done) {
      request(app)
        .get('/home')
        .expect(200, done)
    })
    
    it('should contain text "Home page"', function (done) {
      request(app)
        .get('/home')
        .expect(/Home page/, done)
    })
  })
  
  describe('GET /about', function () {
    it('should return status code 200', function (done) {
      request(app)
        .get('/about')
        .expect(200, done)
    })
    
    it('should contain text "About page"', function (done) {
      request(app)
        .get('/about')
        .expect(/About page/, done)
    })
  })
})

