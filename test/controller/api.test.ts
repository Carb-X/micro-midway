import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";
import assert = require('power-assert');

describe("test/controller/api.test.ts", () => {
  let app: Application;

  before(async () => {
    // create app
    app = await createApp<Framework>();
  });

  after(async () => {
    await close(app);
  });

  it("should POST /api/get_user", async () => {
    // make request
    const result = await createHttpRequest(app)
      .post("/api/get_user")
      .query({ uid: 123 });

    assert.equal(result.status, 200)
    assert.equal(result.body.message, 'OK')
  });
});
