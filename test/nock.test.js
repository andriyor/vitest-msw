import { expect, describe, test } from "vitest";
import nock from "nock";

import {main} from "../index";


describe("/", () => {
    test("with", async () => {
        nock('https://httpbun.com')
            .post('/payload')
            .reply(200, {
                id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
                firstName: "John",
            })


        // TypeError: fetch failed
        expect(await main()).toStrictEqual({
            firstName: "John",
            id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
        });
    });
});
