import React, { Component } from 'react';

class App extends Component {
	state = {
		name : "Daniel",
                course:" Web Dev Level-2",
                grade: "A:Good",  
	}

    render() {
        return (<>
            <center>
<h1><b>Codeyoung Student ID card</b></h1>
            <h1> Hello {this.state.name} </h1>
            <h1>{this.state.course} </h1>
            <h1>{this.state.grade} </h1>
</center>
            </>
        )
    }
}
 
export default App;
