export default interface Work {
    name: string
    slug: string
    caption: string
    captionAlt: string
    overview: string
    tags: string[]
    page: React.FC
    status: ProjectStatus
}

const ProjectStatus = {
    PENDING: "En cours",
    FINISHED: "Terminé",
} as const;

type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export { ProjectStatus };