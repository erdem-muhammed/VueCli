<template>
    <div class="box">
        <div class="products">
            <h4>PRoducts</h4>
            <div></div>
            <button>
                {{ p.name }}- {{ p.price}}
            </button>
            {{ report_text }}
        </div>

        <div class="cart">
             <h4>CART</h4>
             <ul>
                 <li>
                     {{ p.name }} - {{ p.price }}
                 </li>
             </ul>
        </div>
    </div>



</template>



<script>
// eslint-disable-next-line no-unused-vars
import Cookies from "js-cookie";
export default {
    created()
    {
        if(Cookies.get("cart"))
        const list = JSON.parse(Cookies.get("cart"));

        for(let p of list)
        {
            this.cart.push(p);
        }
    fetch("http://localhost/products.php")
    .then(response => response.json())
    .then(response =>
    {
        for(let p of response)
        {
            this.products.push(p);
        }
    })
    .catch(() =>
    {
        this.error_text = "Error"
    })
    .finally(() =>
    {
        
    });
    },
    data()
    {
        return {
            products: [],
            cart: [],
            error_text: ""
        }
    }
}
</script>


<style scoped>
    .box
    {
        display: flex;
    }
    .box>div
    {
        width: 50%;
    }
    .

</style>