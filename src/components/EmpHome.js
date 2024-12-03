
function EmpHome() {
    const empData = [
        {
            id: 1,
            firstName: "ganesh",
            lastName: "mula",
            email:"gani@com.in"
        },
        {
            id: 2,
            firstName: "bujji",
            lastName: "mula",
            email: "bujji@com.in"
        },
        {
            id: 3,
            firstName: "chinna",
            lastName: "mula",
            email: "chinna@com.in"
        }
    ]
    return (<div className='container'>
        <h2>List of Emp</h2>
        <table className='table table-striped table-bordered'>
       
        <thead>
        <tr>
            <th>id  </th>
            <th>firstName  </th>
            <th> lastName </th>
            <th> email </th>
        </tr>
        </thead>
            <tbody>
                {
                    empData.map(emp =>
                        <tr key={emp.id} >
                            <td>{emp.id}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.email}</td>

                        </tr>
                    )

                }
            </tbody>
        </table>
    </div>)
}
export default EmpHome