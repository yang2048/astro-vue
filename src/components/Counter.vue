<template>
  <div class="counter">
    <a-button status="danger" @click="subtract()">-</a-button>
    <pre>{{ count }}</pre>
    <a-button status="danger" @click="add()">+</a-button>
  </div>

  <a-rate :default-value="2.5" allow-half />

  <li v-for="(item, index) in items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>

  <a-space direction="vertical">
    <a-space>
      <a-button type="primary" status="success">Primary</a-button>
      <a-button status="success">Default</a-button>
      <a-button type="dashed" status="success">Dashed</a-button>
      <a-button type="outline" status="success">Outline</a-button>
      <a-button type="text" status="success">Text</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" status="warning">Primary</a-button>
      <a-button status="warning">Default</a-button>
      <a-button type="dashed" status="warning">Dashed</a-button>
      <a-button type="outline" status="warning">Outline</a-button>
      <a-button type="text" status="warning">Text</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" status="danger">Primary</a-button>
      <a-button status="danger">Default</a-button>
      <a-button type="dashed" status="danger">Dashed</a-button>
      <a-button type="outline" status="danger">Outline</a-button>
      <a-button type="text" status="danger">Text</a-button>
    </a-space>
  </a-space>

  <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
    <a-form-item field="name" tooltip="Please enter username" label="Username">
      <a-input v-model="form.name" placeholder="please enter your username..." />
    </a-form-item>
    <a-form-item field="post" label="Post">
      <a-input v-model="form.post" placeholder="please enter your post..." />
    </a-form-item>
    <a-form-item field="isRead">
      <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
  {{ form }}
  <div class="counter-message">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const count = ref(0);
const add = () => (count.value = count.value + 1);
const subtract = () => (count.value = count.value - 1);

const parentMessage = ref('Parent');
const items = ref([{ message: 'Foo' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }, { message: 'Bar' }]);
const form = reactive({
  name: '',
  post: '',
  isRead: false,
});
const handleSubmit = (data: any) => {
  console.log(data);
};
</script>

<style>
.counter {
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
}

.counter-message {
  text-align: center;
}
</style>
