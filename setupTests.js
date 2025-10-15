import nock from "nock";

nock('https://httpun.com')
    .get('/status/400')
    .reply(200, {
        id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
        firstName: "John",
    })