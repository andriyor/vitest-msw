import {expect, describe, test, vi} from "vitest";

import {main} from "../index";


vi.mock('../api-wrapper', () => ({
    fetchPayload: vi.fn().mockResolvedValue({
        firstName: "John",
        id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
    }),
}));

describe("mock", () => {
    test("with", async () => {
        expect(await main()).toStrictEqual({
            firstName: "John",
            id: "15d42a4d-1948-4de4-ba78-b8a893feaf45",
        });
    });
});
