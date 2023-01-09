
let customers = [{firstName:'Sam',
                    lastName:'Smith',
                    email:'sam.smith@gmail.com'}, 
                    {firstName:'Bob',
                    lastName:'Smith',
                    email:'bob.smith@gmail.com'},
                    {firstName:'Dolly',
                    lastName:'Smith',
                    email:'dolly.smith@gmail.com'}
                ];


   
  
   
  


for (let i = 0; i < customers.length; i++) {
    $('#customer-table').append(
        `<tr>
            <td>${customers[i].firstName}</td>
            <td>${customers[i].lastName}</td>
            <td>${customers[i].email}</td>
        </tr>`
    );
}