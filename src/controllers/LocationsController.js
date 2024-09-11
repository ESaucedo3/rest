import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super("api/locations");
    this.router
      .get("", this.getLocations)
      .get("/:locationId/missions", this.getMissionsByLocationId);
  }

  async getLocations(req, res, next) {
    try {
      const locations = await locationsService.getLocations();
      res.send(locations);
    } catch (e) {
      next(e);
    }
  }

  async getMissionsByLocationId(req, res, next) {
    try {
      const locationId = req.params.locationId;
      const locationMissions = await missionsService.getMissionsByLocationId(
        locationId
      );
      res.send(locationMissions);
    } catch (e) {
      next(e);
    }
  }
}
