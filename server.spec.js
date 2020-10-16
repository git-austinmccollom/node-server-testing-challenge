const request = require("supertest");
const server = require("./server.js");

describe('server.js', () => {
    describe('sanity check', () => {
        test('get of index route should return ok status', async () => {
            const expectedStatusCode = 200;

            const response = await request(server).get('/');

            expect(response.status).toEqual(expectedStatusCode);

            // same test using promise .then() instead of async/await
            // let response;
            // return request(server).get('/').then(res => {
            //   response = res;

            //   expect(response.status).toEqual(expectedStatusCode);
            // })
        });
        test('index route response type should be JSON', async () => {
            const response = await request(server).get('/');

            expect(response.type).toEqual('application/json');
        })
        test('index route should return a JSON object', async() => {
            const expectedBody = { api: "running" };

            const response = await request(server).get('/');

            expect(response.body).toEqual(expectedBody);
        });
    })

    describe('create party post request', () => {
        test('returns status code 201 created', async () => {
            const expectedStatusCode = 201;

            const response = await request(server).post('/api/parties').send({ zip: "37207" });

            expect(response.status).toEqual(expectedStatusCode);
        })
        test('returns JSON object with id, zip, radius, matches', async () => {
            const response = await request(server).post('/api/parties').send({ zip: "37207" });

            expect(response.type).toEqual('application/json')
            expect(response.body).toEqual(expect.objectContaining({
                id: expect.anything(),
                zip: expect.anything(),
                radius: expect.anything(),
                matches: expect.anything()
            }))
        })
    })
})