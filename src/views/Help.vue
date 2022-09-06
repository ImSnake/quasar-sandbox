<template>

  <q-page class="q-pa-lg">
    <h5 class="q-mt-none q-mb-sm">Help</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor ea facilis inventore iste, iusto, magnam minima molestias non obcaecati quod repellendus rerum vitae voluptas! Assumenda natus obcaecati totam!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam at, dolores eius expedita magnam maxime molestias pariatur praesentium. Architecto aut cumque excepturi illo laudantium nemo non officiis quisquam reprehenderit.</p>

  <p>https://bestprogrammer.ru/izuchenie/ponimanie-novoj-sistemy-reaktivnosti-v-vue-3#:~:text=Proxy%20API%20позволяет%20разработчикам%20перехватывать,переопределяют%20встроенное%20поведение%20объектов%20JavaScript</p>


  <h1>Hello, Vue 3 Reactivity API! :)</h1>
  <hr>
  <p><strong>Counter:</strong> {{ counter }}</p>
  <button @click="counter++">+ Increment counter</button>
  <br><br>
  <button @click="counter--">- Decrement counter</button>
  <hr>
  <h3>Hello! My name is <mark>{{ person.name }}</mark>. I'm <mark>{{ person.age }}</mark> years old.</h3>
  <p>Edit person's name
    <input v-model="person.name" placeholder="name" /> and age
    <input v-model="person.age" placeholder="age" />
  </p>
  <hr>
  <p><strong>PI:</strong> {{ math.PI }}</p>
  <button @click="math.PI = 6.28">Double PI</button> <span>(The console output after the button is clicked: <em>"Set operation on key 'PI' failed: target is readonly."</em>)</span>
  <hr>

  <h3>Alphabet Numbers</h3>

  <table>
    <tr>
      <th>Letter</th>
      <th>Number</th>
    </tr>
    <tr v-for="(value, key) in alphabetNumbers" :key="key">
    <td>{{ key }}</td>
    <td>{{ value }}</td>
    </tr>
  </table>
  <br>
  <button @click="alphabetNumbers.B = 3">Change the value of B to 3</button><span> (Actually the letter B <em>is</em> changed to number 3 - <button @click="showValue">Show the value of B</button>, but it's <em>not</em> tracked by Vue.)</span>
  </q-page>

</template>

<script>
import { ref, reactive, readonly, markRaw, isRef, isReactive, isReadonly, isProxy, onMounted } from 'vue';

export default {
  setup () {
    const counter = ref();
    const person = reactive({
      name: 'David',
      age: 36
    });
    const math = readonly({
      PI: 3.14
    });
    const alphabetNumbers = markRaw({
      A: 1,
      B: 2,
      C: 3
    });

    const showValue = () => {
      alert(`The value of B is ${alphabetNumbers.B}`)
    };

    onMounted(() => {
      console.log(isRef(counter)) // true
      console.log(isReactive(person)) // true
      console.log(isReadonly(math)) // true
      console.log(isProxy(alphabetNumbers)) // false
    });

    return {
      counter,
      person,
      math,
      alphabetNumbers,
      showValue
    }
  }
};

</script>
