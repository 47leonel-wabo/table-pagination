import React from 'react'
import _ from 'lodash'

const Pagination = (props) => {

    const {pageSize, itemCount, handleSelection, currentPage} = props
    const pageCount = itemCount / pageSize
    if (Math.ceil(pageCount) === 1) return null
    const pages = _.range(1, pageCount + 1)

    return <nav aria-label="...">
        <ul className="pagination pagination-sm">
            {pages.map(page =>
                <li className={page === currentPage ? "page-item active" : "page-item"}
                    style={{ cursor: "pointer"}}
                    onClick={() => handleSelection(page)}
                    key={page}><a className="page-link">{page}</a>
            </li>)}
        </ul>
    </nav>
}

export default Pagination
