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