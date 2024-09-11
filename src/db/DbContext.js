import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { MissionSchema } from "../models/Mission.js";
import { LocationSchema } from "../models/Location.js";
import { RatSchema } from "../models/Rat.js";

class DbContext {
  Account = mongoose.model("Account", AccountSchema);
  Missions = mongoose.model("Mission", MissionSchema);
  Locations = mongoose.model("Location", LocationSchema);
  Rats = mongoose.model("Rat", RatSchema);
}

export const dbContext = new DbContext();
