import { useFormik } from 'formik'
import { object, string, number } from 'yup';
import React from 'react'

const initialState = {
    image: "",
    title: "",
    description: "",
    price: null,
    category: ""
}
const formSchema=object({
    image:string().required("Image Is Required"),
    title:string().required("Title Is Required").min(5).max(25),
    description:string("Description Is Required").required(),
    price:number().required("Price Is Required"),
    category:string().required("Category Is Required"),
})

function Form() {

    const {values,handleChange, handleSubmit, errors} = useFormik({
        initialValues: initialState,
        validationSchema: formSchema,
        onSubmit: (Formdata,action) => {
            console.log(Formdata);
            alert("Form Submited")
            action.resetForm()
        }
    })
    console.log(errors)
    
    const {image,description,title,category,price}=values
    return (
        <div>
            <form onSubmit={handleSubmit} style={{backgroundColor:"white", width:"320px", padding:"20px"}}>
            <h1 style={{color:"black", margin:"0px 0px 20px 0px"}}>Form</h1>
                <input style={{width:"90%", padding:"5px 10px", height:"20px", backgroundColor:"white", color:"black", outline:"none", borderTop:"none", borderLeft:"none", borderRight:"none"}} type="text" name='image' value={image} onChange={handleChange} placeholder="Image" />
                <p style={{margin:"0px", color:"red", height:"25px", textAlign:"left", paddingLeft:"8px"}}>{errors.image ? errors.image:""}</p>
                <input style={{width:"90%", padding:"5px 10px", height:"20px", backgroundColor:"white", color:"black",  outline:"none", borderTop:"none", borderLeft:"none", borderRight:"none"}} type="text" name='title' value={title} onChange={handleChange} placeholder="title" />
                <p style={{margin:"0px", color:"red", height:"25px" , textAlign:"left", paddingLeft:"8px"}}>{errors.title ? errors.title:""}</p>
                <select style={{width:"98%", padding:"5px 10px", height:"35px", backgroundColor:"white", outline:"none", color:"grey", borderTop:"none", borderLeft:"none", borderRight:"none"}} name='category' value={category} onChange={handleChange}>
                    <option style={{backgroundColor:"black", color:"white"}} value={""}>select Your Category</option>
                    <option style={{backgroundColor:"black", color:"white"}} value={"men's clothing"}>men's clothing</option>
                    <option style={{backgroundColor:"black", color:"white"}} value={"jewelery"}>jewelery</option>
                    <option style={{backgroundColor:"black", color:"white"}} value={"electronics"}>electronics</option>
                    <option style={{backgroundColor:"black", color:"white"}} value={"women's clothing"}>women's clothing</option>
                </select>
                <p style={{margin:"0px", color:"red", height:"25px" , textAlign:"left", paddingLeft:"8px"}}>{errors.category ? errors.category:""}</p>
                <input style={{width:"90%", padding:"5px 10px", height:"20px", backgroundColor:"white", color:"black", outline:"none", borderTop:"none", borderLeft:"none", borderRight:"none"}} name='price' value={price} onChange={handleChange} type="text" placeholder="Price" />
                <p style={{margin:"0px", color:"red", height:"25px" , textAlign:"left", paddingLeft:"8px"}}>{errors.price ? errors.price:""}</p>
                <input style={{width:"90%", padding:"5px 10px", height:"20px", backgroundColor:"white", color:"black", outline:"none", borderTop:"none", borderLeft:"none", borderRight:"none"}} name='description' value={description} onChange={handleChange} type="text" placeholder="description" />
                <p style={{margin:"0px", color:"red", height:"25px" , textAlign:"left", paddingLeft:"8px"}}>{errors.description ? errors.description:""}</p>
                <input type="submit" style={{backgroundColor:"black", padding:"10px 20px"}}/>
            </form>
        </div>
    )
}

export default Form