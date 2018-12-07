import mock from "./MockMonths";
import Roadmap from "@/entity/Roadmap";

export default class RoadmapService {

    getMonths() {
        const months = mock.map((roadmap) => {
            return new Roadmap(roadmap);
        })
        console.log('months::::::', months)
        return months;
    }

}