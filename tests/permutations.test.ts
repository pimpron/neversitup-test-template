import request from "supertest";
import server from "../src/server";

afterAll((done) => {
  server.close(done);
});

describe("getPermutations", () => {
  it("should return all unique permutations of a string", (done) => {
    request(server)
      .post("/shuff")
      .send({ str: "qwe" })
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res: any) => {
        if (!("message" in res.body)) throw new Error("missing message key");
      })
      .end((err: any, res) => {
        if (err) return done(err);
        expect(res.body.data).toEqual(
          expect.arrayContaining(["qwe", "qew", "wqe", "weq", "ewq", "eqw"])
        );
        done();
      });
  });
});
