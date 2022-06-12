function getCustomer(id, callback){
    console.log("Getting Customer Informations");
    setTimeout(()=>{
        callback({email: "sabra@gmail", name:"Ahmed", id:1})},3000)
}
const getCustomerOrder = (email, callback ) => {
    console.log("Reading Customer Orders")
    setTimeout(()=>{
        callback({order: "mobile", customerId: 1, creationDate: "2022-02-02"})},3000)
}  

getCustomer(1,(customer)=>{
    console.log(customer)
    getCustomerOrder(customer.email,(order)=>{
    console.log(order)
}) 
})