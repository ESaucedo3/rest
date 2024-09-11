import { dbContext } from "../db/DbContext.js";

class MissionsService {
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
  async updateMission(missionId, missionData) {
    const missionToUpdate = await dbContext.Missions.findById(missionId);
    missionToUpdate.completed = missionData.completed;
    await missionToUpdate.save();
    return missionToUpdate;
  }
  async deleteMission(missionId) {
    const missionToDelete = await dbContext.Missions.findById(missionId);
    if (!missionToDelete) {
      throw new Error("Mission does not exist, Bad ID");
    }
    await missionToDelete.deleteOne();
    return `${missionToDelete.codename} was removed`;
  }
  async getMissionsByLocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId: locationId })
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
