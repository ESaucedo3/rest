import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController {
  constructor() {
    super("api/rats");
    this.router
      .get("", this.getRats)
      .get("/:ratId/missions", this.getMissionsByRatId);
  }

  async getRats(req, res, next) {
    try {
      const rats = await ratsService.getRats();
      res.send(rats);
    } catch (e) {
      next(e);
    }
  }

  async getMissionsByRatId(req, res, next) {
    try {
      const ratId = req.params.ratId;
      const ratMissions = await missionsService.getMissionsByRatId(ratId);
      res.send(ratMissions);
    } catch (e) {
      next(e);
    }
  }
}
