import React from 'react';
import {loadPeople} from './data/fake_data'
import TableComponent from './components/table';

class App extends React.Component {

    state = {
        people: loadPeople(),
        pageSize: 7,
        currentPage: 1
    }

    handlePageSelection = (page) => {
        this.setState({currentPage: page})
    }

    render = () => {

        const {people: allPersons, pageSize, currentPage} = this.state

        return (
            <div className="App container">
                <TableComponent
                    people={allPersons}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    handlePage={this.handlePageSelection}/>
            </div>
        )
    }
}

export default App;
