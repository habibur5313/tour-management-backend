import { Router } from "express";
import { TourControllers } from "./tour.controler";



const router = Router()

router.post("/create", TourControllers.createTour )
// router.get("/", )
// router.patch("/:id", )
// router.delete("/:id", )


// // tour-types
// router.post("/create-tour-type:", )
// router.get("/tour-types:", )
// router.patch("/tour-types/:id", )
// router.delete("/tour-types/:id", )


export const TourRoutes = router