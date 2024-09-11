import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super("api/locations");
    this.router.get("", this.getLocations);
  }

  async getLocations(req, res, next) {
    try {
      const locations = await locationsService.getLocations();
      res.send(locations);
    } catch (e) {
      next(e);
    }
  }
}
