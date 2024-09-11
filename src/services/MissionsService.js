import { dbContext } from "../db/DbContext.js";

class MissionsService {
  async updateMission(missionId, missionData) {
    const missionToUpdate = await dbContext.Missions.findByIdAndUpdate(
      missionId,
      missionData
    );
    return missionToUpdate;
  }
  async getMissionsByLocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId })
      .populate("location")
      .populate("rat", "-name -picture");
    return missions;
  }
  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData);
    await mission.populate("location");
    await mission.populate("rat", "-name -picture");
    return mission;
  }
  async getMissions() {
    const missions = await dbContext.Missions.find()
      .populate("location")
      .populate("rat", "-name -picture");
    return missions;
  }
  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Missions.find({ ratId: ratId })
      .populate("location")
      .populate("rat", "-name -picture");
    return missions;
  }
}

export const missionsService = new MissionsService();
