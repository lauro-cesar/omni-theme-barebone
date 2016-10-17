# omni-theme-barebone
Template básico comentado


# Updates:

Agora o catalogo é adicionado segundo uma classe, e o catalogID é retirado do atributo omni-catalog-id, como no exemplo:



  <div class="catalogWidget_{{type}}"  omni-catalog-id="{{cat.catalogID}}" omni-catalog-limit={{limit}}>
           

           <div class="catalogControls"></div>


           <div class="catalogContainer row"></div>
  </div>
  O contantainer mudou o nome para :catalogWidget_{{type}}