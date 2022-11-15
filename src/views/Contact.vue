<template>
  <section class="contact">
    <div v-if="this.isVisible" class="contact_form_visible">
      <h1 class="section-title">Conversemos</h1>
      <div class="contact_text">¡Hola! Si te interesó algo que viste, quieres darme feedback o simplemente quieres
        chatear, mándame un mensaje acá abajo y te contactaré a penas pueda.</div>
      <div class="contact_form-container">
        <form class=" contact_form">

          <div class="contact_first-row">

            <div class="contact_input-container">
              <div class="group">
                <input type="contact_text" class="input" v-model="name" name="name" required>
                <label>Nombre completo</label>
              </div>
              <span class="contact_error" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
            </div>

            <div class=" contact_input-container">
              <div class=" group">
                <input type="contact_text" class="input" v-model="email" name="email" required>
                <label>Email</label>
              </div>
              <span class="contact_error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
            </div>

          </div>
          <div class="contact_textarea-container">
            <div class="group contact_textarea-container">
              <textarea type="text" class="input contact_textarea" placeholder="a" v-model="message" name="message"
                required></textarea>
              <label>Escribe tu mensaje</label>
            </div>

            <span class="contact_error" v-if="v$.message.$error">{{ v$.message.$errors[0].$message }}</span>
          </div>
          <button type="submit" v-on:click=submit() class="contact_btn">Envía</button>
        </form>
      </div>
    </div>
    <div v-else>
      <h1 class="section-title">Gracias por tu mensaje!</h1>
      <div class="contact_text">Estaré contactándome contigo</div>
      <div class="frame">
        <div class="plane-container">
          <a href="http://customer.io/" target="_blank">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
              y="0px" width="1131.53px" height="379.304px" viewBox="0 0 1131.53 379.304"
              enable-background="new 0 0 1131.53 379.304" xml:space="preserve" class="plane">
              <polygon fill="#D8D8D8"
                points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  " />
              <polygon fill="#C4C4C3" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   " />
            </svg></a>

        </div>
      </div>
      <div class="clouds">

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="762px" height="331px" viewBox="0 0 762 331" enable-background="new 0 0 762 331" xml:space="preserve"
          class="cloud big front slowest">
          <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z" />
        </svg>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="762px" height="331px" viewBox="0 0 762 331" enable-background="new 0 0 762 331" xml:space="preserve"
          class="cloud distant smaller">
          <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z" />
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="762px" height="331px" viewBox="0 0 762 331" enable-background="new 0 0 762 331" xml:space="preserve"
          class="cloud small slow">
          <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z" />
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="762px" height="331px" viewBox="0 0 762 331" enable-background="new 0 0 762 331" xml:space="preserve"
          class="cloud distant super-slow massive">
          <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z" />
        </svg>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="762px" height="331px" viewBox="0 0 762 331" enable-background="new 0 0 762 331" xml:space="preserve"
          class="cloud slower">
          <path fill="#FFFFFF" d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106
c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529
C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5
S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z" />
        </svg>

      </div>
    </div>
  </section>
</template>

<script>
import { db } from '../firebase/init'
import { collection, doc, setDoc } from "firebase/firestore";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'


export default {

  name: "Contact",
  components: {

  },

  data() {
    return {
      v$: useVuelidate(),
      email: "",
      name: "",
      message: "",
      isVisible: true
    }
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage('Este campo no puede estar vacío', required)
      },
      message: {
        required: helpers.withMessage('Este campo no puede estar vacío', required)
      },
      email: {
        required: helpers.withMessage('Este campo no puede estar vacío', required),
        email: helpers.withMessage('Este campo debe tener un email válido', email)
      }
    }
  },
  methods: {
    async submit() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.isVisible = false
        const userMessage = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        try {
          const newMessagRef = doc(collection(db, "formMessages"));
          await setDoc(newMessagRef, userMessage)
            ;


        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

    }
  }
};
</script>

<style lang="scss">
svg {
  max-width: 100%;
  height: auto;
  display: block;
}
* {
  box-sizing: border-box;
}

/* basic stylings ------------------------------------------ *

/* form starting stylings ------------------------------- */
.group {
  position: relative;

  padding: 5px 15px;
  border: 3px solid var(--decor);
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--body-fg);
  height: 50px;

}

.group:has(> .input:focus),
.group:has(> .input:valid),
.group:has(> .input.active) {
  border: 3px solid var(--accent)
}

.input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  background: none;
  color: var(--text-color);

}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
.input:focus~label,
.input:valid~label {
  top: -22px;
  font-size: 14px;
  color: var(--accent);
}



.contact {
  min-height: 100vh;
  padding: 84px 5%;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  &_text {
    color: var(--text-color);
    margin-top: 10px;
    width: 80%;
    font-size: 1rem;
  }
  &_form_visible{
    max-width: 1200px;
  }
  &_form-container {
    display: flex;
    width: 100%;
  }

  &_error {
    font-size: 0.8rem;
    color: var(--accent);
    margin-left: 25px;
  }

  &_form {
    margin-top: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &_first-row {
    margin-top: 2rem;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    width: 100%;
  }

  &_input-container {
    width: 100%;
  }

  &_textarea-container {
    max-width: 100%;
    min-width: 100%;
    min-height: 200px;
    margin-top: 25px;
  }

  &_textarea {
    max-width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    padding: 10px 5px;
    box-sizing: border-box;
    resize: none;
  }

  &_area-label {
    transform-origin: 0 0;
    position: absolute;
    z-index: 1;
    transition: all .1s ease-in-out;
    font-size: 1.1rem;
    height: 170px;
  }

  &_textarea:focus+&_area-label,
  &_textarea:not(:placeholder-shown)+&_area-label {
    transform: translate(-10px, -35px);
    color: var(--decor);
    font-size: 0.9rem;
  }

  &_btn {
    margin-top: 20px;
    background-color: var(--accent);
    color: var(--text-color);
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.3rem;
    padding: 5px 20px;
    max-width: 250px;
    width: 100%;
  }

  &_textarea::placeholder {
    color: transparent !important;
    user-select: none !important;
  }

  @media (max-width: 980px) {
    padding: 10px 5% 84px;
    align-items: center;
    text-align: center;

    &_first-row {
      flex-direction: column;
    }

    &_text {
      width: 100%;
    }

    &_form-container {
      justify-content: center;
    }
  }

}
</style>