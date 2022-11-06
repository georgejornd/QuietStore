import React, {useMemo} from "react";
import {IPagination} from "../../types/pagination/pagination";
import FlexRow from "../../ui-kit/flex-row/flex-row";
import Tag from "../../ui-kit/text/tag";

interface PaginationProps {
    pagination: IPagination
    setPagination?: (pagination: IPagination) => void
    button: JSX.Element
    details: {
        label: string
        count: number
    }
}

const Pagination: React.FC<PaginationProps> = ({pagination, button, details}) => {
    const pages = useMemo(() => {
        const result = []
        for (let i = 1; i <= pagination.count; i++) result.push(i)

        return result
    }, [pagination.count])

    return (
        <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
            <FlexRow className="pagination-pages" gap={8}>
                <label className="pagination-label">Page:</label>
                <>
                    {pages.map(page =>
                        <div className={pagination.current === page ? "pagination-active" : undefined}>{page}</div>
                    )}
                </>
            </FlexRow>

            {button}

            <FlexRow gap={4}>
                <Tag label={details.count} color="primary" size="small" />
                <label className="pagination-label">{details.label}</label>
            </FlexRow>
        </FlexRow>
    )
}

export default Pagination