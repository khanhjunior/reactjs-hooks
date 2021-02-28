import React from 'react'

const Pagination = (props) => {
    const { pagination, onPageChange } = props
    const { _page, _limit, _totalRows } = pagination

    const totalPage = Math.ceil(_totalRows / _limit)

    const handlePageClick = (newPage) => {
        if (!onPageChange) return

        onPageChange(newPage)
    }

    return (
        <div className="pagination">
            <button
                type="button"
                onClick={() => handlePageClick(_page - 1)}
                disabled={_page === 1}
            >Prev</button>
            <button
                type="button"
                onClick={() => handlePageClick(_page + 1)}
                disabled={_page === totalPage}
            >Next</button>
        </div>
    )
}

export default Pagination