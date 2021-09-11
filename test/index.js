const chai = require('chai');  
const chaiHttp = require('chai-http');  
/*eslint-disable */
const should = chai.should();  
/*eslint-enable */
const server = require('../app');

chai.use(chaiHttp);

describe('Node Server', () => {  
	it('it should GET all the data', (done)=> {
		chai.request(server)
			.get('/')
			.end( (err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				res.body.should.have.property('name').to.be.an('string');
				res.body.should.have.property('surname').to.be.an('string');
				res.body.should.have.property('age').to.be.an('number');
				done();
			});
	});
});