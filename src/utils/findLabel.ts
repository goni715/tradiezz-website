import type { TOption } from "@/types/global.type";

const findLabel = (options: TOption[], value: string) => {
    const option = options.find((cv)=> cv.value === value);
    return option?.label;
}

export default findLabel;