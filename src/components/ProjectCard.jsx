import Card from "./design/Card";
import { Play } from "lucide-react";

const ProjectCard = ({ project, openModal }) => {
  return (
    <Card className="group overflow-hidden relative">
      <div className="relative w-full h-[300px] flex items-center justify-center bg-tertairy dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
        <img
          className="absolute bottom-0 shadow-2xl"
          src={project.src}
          width={347}
          height={250}
          alt={project.name}
        />
        <div className="flex gap-x-4">
          <button
            className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            onClick={() => openModal(project.video)}
          >
            <Play className="text-white cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="h-full px-8 py-6">
        <h4 className="h4 mb-2">{project.name}</h4>
        <p className="max-w-[530px] text-grey">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
