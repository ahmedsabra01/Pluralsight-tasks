function getCustomer(id) {
    console.log("Getting Customer Informations");
    return new Promise((resolvev, reject) => {
        setTimeout(() => {
            resolve({ email: "sabra@gmail", name: "Ahmed", id: 1 })
        }, 3000);
    })
}
const getCustomerOrder = (email) => {
    console.log("Reading Customer Orders")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order: "mobile", customerId: 1, creationDate: "2022-02-02" })
        }, 3000)

    })
}

async function get() {
    const customer = await getCustomer(1);
    const order = await getCustomerOrder(customer.email)
    console.log(customer);
}