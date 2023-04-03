import { TDirection } from "@/types";
import { useRouter } from "next/router";
import qs from "qs";

interface IProType {
    page: number,
    pageCount: number,
    redirectUrl?: string
}

const Pagination = ({ page, pageCount, redirectUrl= '/' }: IProType) => {

    const route = useRouter();

    const isPrevDisabled = (): boolean => {
        return page <= 1;
    }

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    }

    const paginationHandler = (d: TDirection) => {
        if (d === 1 && isNextDisabled()) {
            return;
        }
        if (d === -1 && isPrevDisabled()) {
            return;
        }
        const queryString = qs.stringify({
            page: page + d
        });
        route.push(`${redirectUrl}?${queryString}`);

    };
    return (<div className="flex justify-center mt-24">
        <button onClick={() => paginationHandler(-1)} className={`bg-primary py-2 px-4 text-white w-24 rounded ${isPrevDisabled() ? "disabled" : ''} `}>
            prev
        </button>
        <button onClick={() => paginationHandler(1)} className={`bg-primary py-2 px-4 text-white w-24 rounded ml-4 ${isNextDisabled() ? "disabled" : ''} `}>
            next
        </button>
    </div>
    );
}
export default Pagination;