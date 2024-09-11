import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
  constructor() {
    super("api/missions");
    this.router.get("", this.getMissions).post("", this.createMission);
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
}
