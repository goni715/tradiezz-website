import { JOB_TYPE } from "@/constant/job.constant"
import { TJobType } from "@/types/job.type"

const getJobTypeColor = (type: TJobType) => {
    if (type === JOB_TYPE.full_time) {
        return "bg-green-100 text-green-800"
    }
    if (type === JOB_TYPE.part_time) {
        return "bg-yellow-100 text-yellow-800"
    }
    if (type === JOB_TYPE.freelance) {
        return "bg-blue-100 text-blue-800"
    }
    if (type === JOB_TYPE.contact) {
        return "bg-purple-100 text-purple-800"
    }

    return "bg-slate-100 text-slate-800";
}

export default getJobTypeColor;