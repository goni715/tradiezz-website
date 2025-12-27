import { IMeta } from '@/types/global.type';
import { Pagination } from 'antd'
import React from 'react';

type TProps = {
  meta: IMeta;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
}

const CustomPagination = ({ meta, currentPage, setCurrentPage, pageSize, setPageSize}: TProps) => {
    const handlePagination = (page: number, PageSize: number) => {
        setCurrentPage(page);
        setPageSize(PageSize);
    };

    return (
        <>
            <div className="p-8 flex justify-center">
                <Pagination
                    onChange={handlePagination}
                    current={currentPage}
                    pageSize={pageSize}
                    total={meta?.total}
                />
            </div>
        </>
    )
}

export default CustomPagination