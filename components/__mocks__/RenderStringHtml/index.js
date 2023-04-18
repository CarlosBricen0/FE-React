export const htmlTest = `<style>
.mobile{
  padding: 15px;
}
.desktop{
  padding: 15px;
}
.bannerImage{
   padding-top: 20px;
}
@media (max-width: 600px) {
  .img-mobile{
       display: block;
  }
   .img-desktop{
      display: none;
  }
  .desktop{
     display: none;
  }
}
@media (min-width: 700px) {
  .img-mobile{
       display: none;
  }
   .img-desktop{
      display: block;
  }
  .mobile{
     display: none;
  }
  .desktop{
     display: block;
  }
}
</style>
<div class="desktop" style="width: 1120px;">

<h1>Nueva campaña Example Desktop</h1>

<div class="bannerImage">

<img class="img-desktop" src="https://images.ctfassets.net/un6yvtd6uq5z/47meHaIh8KChNg91wUxg4Q/f386dbd690eaaa793d5b0dfab0243ef7/Banner-Maggi-Sopas-y-Cremas-1160x115px.png"/>

</div>
</div>

<div class="mobile" >

<h1>Nueva campaña Example Mobile</h1>

<div class="bannerImage">

<img class="img-mobile" src="https://images.ctfassets.net/un6yvtd6uq5z/4Y0rezDCSfrPCzBAsYnsDF/5c105ab361c00dd94d4d68f97c71209b/Banner-Maggi-Sopas-y-Cremas-640x140px.png" style="max-width: 100%; border-radius: 12px;"/>

</div>
</div>`