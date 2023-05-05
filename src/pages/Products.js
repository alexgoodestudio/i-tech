import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.css';
import "../css/index.css"
import MarbleImage from "../components/MarbleImage"
import AlternateBanner from "../components/AlternateBanner";
import ITech from "../components/ITech";



export default function Products(){
    const[content, setContent] = useState(<ProductList showForm ={showForm}/>);

    function showList(){
        setContent(<ProductList showForm ={showForm} />);
    }

    function showForm(product){
        setContent(<ProductForm product= {product} showList={showList} />);
    }

    return(
        <div className="ProductsPage"> 
            <Row>
                <Col className="ITechTwo">
                    <ITech />
                </Col>
                
                <Col sm={8}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    <AlternateBanner />

                    <br/>
                </Col>
                
            </Row>
            {content}

        </div>
    )
    }

function ProductList(props){
    const [products, setProducts]= useState([]);

    function fetchProducts(){
        fetch("http://localhost:3000/products")
        .then ((response) => {
            if (!response.ok){
                throw new Error ('Unexpected Server Response');
            }
            return response.json()
        })
           .then ((data) => {
            // console.log(data);
            setProducts(data);
        })
           .catch ((error) => console.log('Error: ', error));
          }

          useEffect(() => fetchProducts(),[]);
    
function deleteProduct(id){
    fetch("http://localhost:3000/products/" + id, {
        method: 'DELETE'
    })
        .then ((response) => response.json())
        .then((data) => fetchProducts())
    }

    return (
        <div className="productExplainer container">

            <Row>
                <Col>
                    <p className="tablepara">The product works by securely collecting and organizing financial information in one
                    central location, making it easy for users to track their spending, and analyze their
                    overall financial health. The database product provides users with a range of tools and features to help them gain
                    better insight into their spending. </p>
                </Col>                <Col>
                    <p className="tablepara">  These tools include budgeting tools, financial planning tools, 
                    and reporting capabilities. By using these tools, users can identify areas where they can reduce expenses, optimize their
                    investments, and improve their overall financial situation.</p>
                </Col>
                
                
            </Row>

            
        <Table striped bordered hover size="sm" className="DataTable container " variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Employee Name</th>
                    <th>Brand/Model</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Recieved On</th>   
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) => {
                    return(
                    
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.price}$</td>
                            <td>{product.createdAt}</td>
                            <td>{product.description}</td>
                            <td>                            
                            <ButtonGroup >
                                <Button onClick={() => props.showForm(product)} variant ="outline-secondary"> Edit </Button>
                                <Button onClick={() => deleteProduct(product.id)} variant ="outline-secondary"> Delete </Button>
                            </ButtonGroup></td>
                        </tr>
                    );
                })
            }
        </tbody>
    </Table>


        <div className="CreateRefreshButtons">
            <ButtonGroup className="editdeletebuttons">
                <Button onClick={() => props.showForm([])} variant ="secondary" >Create</Button>
                <Button onClick={() => fetchProducts()} variant ="outline-secondary">Refresh</Button> 
            </ButtonGroup>
        </div>
 
</div> 
    );
}



function ProductForm(props){
    const[errorMessage, setErrorMessage] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        
        //read form data
        const formData = new FormData(event.target);

        //convert formData to object
        const product= Object.fromEntries(formData.entries());

        //form validation
        if(!product.name || !product.brand || !product.category || !product.price){
            console.log("Please provide all the required fields!");
            setErrorMessage(
                <Alert variant="success">
                    Please provide all the required fields!
                </Alert>
            )
            return;
        }
        
        if(props.product.id){
        //update the product
        fetch("http://localhost:3000/products/" + props.product.id, {
            method: "PATCH",
            headers:{
               "Content-Type":"application/json",
               }, 
                body: JSON.stringify(product)
           })
           .then((response) => {
               if(!response.ok){
                       throw new Error("Network response was not OK");
               }
               return response.json()
           })
           .then((data) => props.showList())
           .catch((error) => {
               console.group("Error", error)
           })
   }
        else
        //create new product
        product.createdAt = new Date().toISOString().slice(0,10);
        fetch("http://localhost:3000/products", {
             method: "POST",
             headers:{
                "Content-Type":"application/json",
                }, 
                 body: JSON.stringify(product)
            })
            .then((response) => {
                if(!response.ok){
                        throw new Error("Network response was not OK");
                }
                return response.json()
            })
            .then((data) => props.showList())
            .catch((error) => {
                console.group("Error", error)
            })
        }

    return (
        <div className="APP">
                    {errorMessage}  
                        <Row>
                            <Col sm={6} className="ColLeft"> 
                            <div className="asdContainer">  
                            <br/>                         
                            <p className=" andh">{props.product.id ? "Edit Product" : "Assign New Device"}</p>
                                <Form  onSubmit={(event) => handleSubmit(event)} >
                                    <Form.Group>
                                        <Form.Label
                                            readOnly
                                            className="mb-3 ">  
                                            <Form.Control form-control-plaintext placeholder="Employee Name" name="name" defaultValue={props.product.name}/>
                                        </Form.Label>
                                    </Form.Group>

                                    {props.product.id && <Form.Group>
                                        <Form.Label 
                                            className="mb-3">  
                                            <Form.Control placeholder="ID" name="id" defaultValue={props.product.id}/>
                                        </Form.Label>
                                    </Form.Group>}

                                <Form.Group>
                                    <Form.Label 
                                        
                                        className="mb-3">
                                        <Form.Control 
                                            placeholder="Brand/Model" 
                                            name="brand" 
                                            defaultValue={props.product.brand}/>
                                    </Form.Label>
                                    </Form.Group>
                                
                                    <Form.Group>
                                        <Form.Label className="mb-3">
                                            <Form.Select name="category" defaultValue="{props.product.category}" aria-label="Floating label select example">
                                                <option value="Other">Other</option>
                                                <option value="Phones">Phones</option>
                                                <option value="Computers">Computers</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="GPS">GPS</option>
                                                <option value="Cameras">Cameras</option>
                                            </Form.Select>
                                        </Form.Label>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label
                                            className="mb-3">
                                            <Form.Control placeholder="Price" defaultValue={props.product.price} name="price"/>
                                        </Form.Label>
                                    </Form.Group>
                                    
                                    <Form.Group>
                                        <Form.Label 
                                            label="description"
                                            className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    style={{ height: '90px' }}
                                                    placeholder="Description"
                                                    name="description"
                                                    defaultValue={props.product.description}/>
                                        </Form.Label>
                                    </Form.Group>
                                    <ButtonGroup>    
                                        <Button      
                                            type = "submit"
                                            variant ="outline-light"
                                            className="mb-3"> Save
                                        </Button>
                                        <Button onClick={() => props.showList()} 
                                            variant ="light"
                                            className="mb-3"> Cancel
                                        </Button>
                                    </ButtonGroup>   
                                </Form>   
                                </div>     
                                                  
                            </Col>
                            
                                <Col className="ColRight">
                                <MarbleImage/>
                            </Col>
                        </Row>

                            
                    
                </div>
        );
        }
    
