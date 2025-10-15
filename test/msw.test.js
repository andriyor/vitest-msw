import { expect, describe, test } from "vitest";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import {main} from "../index";

export const server = setupServer();

server.listen();

describe("/", () => {
  test("with", async () => {
    server.use(
      http.post("https://httpbun.com/payload", () => {
        return HttpResponse.json({
          id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
          firstName: "John",
        });
      }),
    );


    // TypeError: fetch failed
    expect(await main()).toStrictEqual({
      firstName: "John",
      id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
    });
  });
});
