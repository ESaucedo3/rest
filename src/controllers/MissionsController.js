import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super("api/missions");
    this.router
      .get("", this.getMissions)
      .post("", this.createMission)
      .put("/:missionId", this.updateMission)
      .delete("/:missionId", this.deleteMission);
  }

  async getMissions(req, res, next) {
    try {
      const missions = await missionsService.getMissions();
      res.send(missions);
    } catch (e) {
      next(e);
    }
  }

  async createMission(req, res, next) {
    try {
      const missionData = req.body;
      const mission = await missionsService.createMission(missionData);
      res.send(mission);
    } catch (e) {
      next(e);
    }
  }

  async updateMission(req, res, next) {
    try {
      const missionId = req.params.missionId;
      const missionData = req.body;
      const updatedMission = await missionsService.updateMission(
        missionId,
        missionData
      );
      res.send(updatedMission);
    } catch (e) {
      next(e);
    }
  }

  async deleteMission(req, res, next) {
    try {
      const missionId = req.params.missionId;
      const deletedMission = await missionsService.deleteMission(missionId);
      res.send(deletedMission);
    } catch (e) {
      next(e);
    }
  }
}
