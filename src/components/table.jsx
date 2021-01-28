import React from 'react'
import Pagination from "./pagination";
import {paginateTable} from "../utils/paginate";

const TableComponent = (props) => {

	const {people: all, handlePage, pageSize, currentPage} = props
	const people = paginateTable(all, pageSize, currentPage)

	return <div className="container">
		<table className="table table-hover">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">First</th>
		      <th scope="col">Last</th>
		      <th scope="col">Handle</th>
		    </tr>
		  </thead>
		  <tbody>
		  {people.map(person =>
		  	<tr key={person.id}>
		      <td>{person.id}</td>
		      <td>{person.firstname}</td>
		      <td>{person.lastname}</td>
		      <td>{person.account}</td>
		    </tr>)}
		  </tbody>
		</table>
		<Pagination
			pageSize={pageSize}
			itemCount={all.length}
			currentPage={currentPage}
			handleSelection={handlePage}/>
	</div>
}

export default TableComponent
