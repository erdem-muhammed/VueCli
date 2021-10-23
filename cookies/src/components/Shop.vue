<template>
    <div class="box">
        <div class="products">
            <h4>PRoducts</h4>
            <div></div>
            <button v-for="p in products" :key="p.id" @click="addToCart(p)">
                {{ p.name }}- {{ p.price}}
            </button>
            {{ report_text }}
        </div>

        <div class="cart">
             <h4>CART</h4>
             <ul>
                 <li v-for="p in cart" :key="p.id">
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
    },
    methods:
    {
        addToCart(product)
        {
            this.cart.push(product);
            Cookies.set("cart", JSON.stringify(this.cart));
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