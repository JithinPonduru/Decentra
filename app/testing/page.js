import request from "supertest";
import app from "../app"; // Adjust the path based on your project structure
import User from "../models/User"; // Adjust based on your model path

describe("verifybypolice", () => {
  it("should be able to verify the user by police", async () => {
    const user = await User.findOne({ email: "[email protected]" });
    expect(user).not.toBeNull();

    const token = await user.generateAuthToken();
    const response = await request(app)
      .post("/user/verifybypolice")
      .set("Authorization", `Bearer ${token}`)
      .send({ status: "verified" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message", "User verified successfully");
  });
});
