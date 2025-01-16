async function fet_data() {
    let res=await fetch("http://localhost:3000/emp")
    let data = await res.json()
    let final_data=data.map((t)=>`
        <tr>
            <td> ${t.id}</td>
            <td> ${t.name}</td>
            <td> ${t.age}</td>
            <td> ${t.address}</td>
            
            <td> ${t.city}</td>
            <td> ${t.contact}</td>
            
            <td><button onclick="mydelete('${t.id}')"> Delete</button></td>
            <td><button onclick="myedit('${t.id}')"> Edit</button></td>
        </tr>
    `).join("")
   let t = document.querySelector('#showdata')
   t.innerHTML = final_data
    // console.log(final_data);
    
}
fet_data()
    // form submit data insert
function insert_data(){
    let frmdata = {
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        address:document.getElementById('address').value,
        contact:document.getElementById('contact').value,
        city:document.getElementById('city').value
    }
    fetch("http://localhost:3000/emp",{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)}
    )
    .then(r=>alert("data inserted"))
    
}

    // delete

    function mydelete(id){
        fetch( `http://localhost:3000/emp/${id}`,{
                    method: 'DELETE',
        })
            .then(re=>alert("delete successfully"))
    }

            // edit
            
async function myedit(id){
                let res = await fetch(`http://localhost:3000/emp/${id}`)
                let data = await res.json()

                //  console.log(data);
                 
                let edit_frm = `
                    <input type="text" value="${data.id}" id="id1" readonly> <br>
                    <input type="text" value="${data.name}" id="name1"> <br>
                    <input type="text" value="${data.age}" id="age1"> <br>
                    <input type="text" value="${data.address}" id="address1"> <br>
                    <input type="text" value="${data.contact}" id="contact1"> <br>
                    <input type="text" value="${data.city}" id="city1"> <br>
                    <input type="submit" onclick="myupdate('${data.id}')">
                    
                `
                document.querySelector('#editform').innerHTML=edit_frm
            }
                
function myupdate(id){
                        let updata={
                            id:document.querySelector('#id1').value,
                            name:document.querySelector('#name1').value,
                            age:document.querySelector('#age1').value,
                            address:document.querySelector('#address1').value,
                            contact:document.querySelector('#contact1').value,
                            city:document.querySelector('#city1').value,
                        }

                            fetch(`http://localhost:3000/emp/${id}`,{
                                method:'PUT',
                                headers:{
                                    'Content-type':'application/json'
                                },
                                body:JSON.stringify(updata)
                            })
                                .then(r=>alert("updated!!!!!!!"))
                    }
            