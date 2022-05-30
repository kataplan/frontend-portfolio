<template>
  <section class="contact">
    <h1 class="section-title">Conversemos</h1>
    <div class="contact_text">¡Hola! Si te interesó algo que viste, quieres darme feedback o simplemente quieres chatear, mándame un mensaje acá abajo y te contactaré a penas pueda.</div>
    <div class="contact_form-container">
      <form class="contact_form">
        
        <div class="contact_first-row" >
          <div class="input-container contact_input-container">
            <input type="text" class="input" placeholder="a">
            <span class="label">Nombre Completo</span>
          </div>
          <div class="input-container contact_input-container">
            <input type="email" class="input" placeholder="a">
            <span class="label">Email</span>
          </div>
        </div>
        <div class="input-container contact_textarea-container">
          <textarea type="text" class="input contact_textarea" placeholder="a"></textarea>
          <span class="contact_area-label">Deja tu mensaje</span>
        </div>
      </form>
   
    </div>
  </section>
</template>

<script>

export default {
  name: "Contact",
  components: {
    
  },
};
</script>

<style lang="scss">
  .contact{
    min-height: 100vh ;
    padding: 84px 5%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    &_text{
      color: var(--text-color);
      margin-top: 10px;
      width: 80%;
      text-align: center;
    }
    &_form-container{
      display: flex;
      justify-content: center;
      width: 100%;
    }
    &_form{
      margin-top: 40px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_first-row{
      display: flex;
      flex-wrap: wrap;
      gap:15px;
      justify-content: space-between;
      width: 100%;
    }
    &_input-container{
      width: 100%;
    }
    &_textarea-container{
      max-width: 100%;
      min-width: 100%;
      min-height: 200px;
      margin-top: 40px;
    }
    &_textarea{
      max-width: 100%;
      min-width: 100%;
      height: 100%;
      min-height: 100%;
      max-height: 100%;
      padding: 10px 5px;
      box-sizing: border-box;
    }
    &_area-label{
      transform-origin: 0 0;
      position: absolute;
      z-index: 1;
      transition: all .1s ease-in-out;
      font-size: 1.1rem;
      height: 170px;
    }
    &_textarea:focus + &_area-label,
    &_textarea:not(:placeholder-shown) + &_area-label{
      transform: translate(-10px,-35px);
      color: var(--decor);
      font-size: 0.9rem;
    }
    &_textarea::placeholder {
      color: transparent !important;
      user-select: none !important;
      }
  }
  
</style>