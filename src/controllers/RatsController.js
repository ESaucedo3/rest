import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController {
  constructor() {
    super("api/rats");
    this.router.get("", this.getRats);
  }

  async getRats(req, res, next) {
    try {
      const rats = await ratsService.getRats();
      res.send(rats);
    } catch (e) {
      next(e);
    }
  }
}
