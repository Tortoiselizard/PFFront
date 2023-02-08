import Purchases from "@/components/Purchases/Purchases";

const myOrders = async () => {
        try {
          const res = await fetch(process.env.RUTA_BACK+"/orders", {
              method: "GET",
              body: JSON.stringify(),
              headers: {
                  "Content-Type": "application/json",
                },
            });
       
            const data = await res.json();
            console.log(data, "HOLA SOY TU DATA");
        
          return data
        } catch (err) { 
            console.log(err)
          }
        }
async function MyPurchases() {
        const orders = await myOrders()
            return(
                    <Purchases orders= {orders}/>
            )
}
    

export default MyPurchases;