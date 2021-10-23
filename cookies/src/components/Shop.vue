<template>
    <div class="box">
        <div class="products">
            <h4>PRoducts</h4>
            <div class="loading" :style="'display: ' + loading_disp"></div>
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
       {
        const list = JSON.parse(Cookies.get("cart"));

        for(let p of list)
        {
            this.cart.push(p);
        }
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
        this.loading_disp = "none";
    });
    },
    data()
    {
        return {
            products: [],
            cart: [],
            error_text: "",
            loading_disp: "block"
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
    .products>button
    {
        margin: 10px;
    }
    .box ul
    {
        text-align: left;
    }
    .loading
    {
        margin-top: 10px;
        position: relative;
    }
    .loading::after
    {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: crimson;
        border-radius: 50%;
        animation: btn-animation 1s ease infinite;
    }
     @keyframes btn-animation
    {
        from
        {
            transform: rotate(0turn);
        }

        to
        {
            transform: rotate(1turn);
        }
    }

</style>