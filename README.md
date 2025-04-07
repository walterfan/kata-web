# kata-web

## **1. JavaScript**
### 关键概念：
1. **基础语法**（与后端语言类似）：
   ```javascript
   // 变量、条件、循环、函数
   const name = "Alice";
   let count = 0;
   if (count === 0) { /*...*/ }
   for (let i = 0; i < 5; i++) { /*...*/ }
   function add(a, b) { return a + b; }
   ```

2. **箭头函数**（简化函数语法）：
   ```javascript
   const add = (a, b) => a + b;
   ```

3. **异步编程**（前端必备）：
   ```javascript
   // Promise
   fetchData().then(data => console.log(data)).catch(error => console.error(error));

   // async/await（推荐）
   async function loadData() {
     try {
       const data = await fetchData();
     } catch (error) { /*...*/ }
   }
   ```

4. **DOM 操作**（前端特有）：
   ```javascript
   // 获取元素、绑定事件
   const button = document.getElementById("myButton");
   button.addEventListener("click", () => { alert("Clicked!"); });
   ```

### 参考资料：
- [现代 JavaScript 教程](https://zh.javascript.info/)

---

## **2. TypeScript**
### 关键概念：
1. **类型注解**：
   ```typescript
   let age: number = 25;
   interface User { name: string; id: number; }
   function greet(user: User): string { return `Hello ${user.name}`; }
   ```

2. **泛型**（类似 Java/C#）：
   ```typescript
   function identity<T>(arg: T): T { return arg; }
   ```

3. **类型推断**：
   TypeScript 会自动推断变量类型（如 `const x = 10` 推断为 `number`）。

### 配置 TS：
1. 安装：
   ```bash
   npm install -g typescript
   tsc --init  # 生成 tsconfig.json
   ```

2. 与 JavaScript 混合使用：
   - 文件后缀改为 `.ts` 或 `.tsx`
   - 逐步为现有 JS 代码添加类型

### 参考资料：
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)

---

## **3. Vue.js 3.0**
### 关键概念：
1. **单文件组件（SFC）**：
   ```vue
   <!-- MyComponent.vue -->
   <template>
     <button @click="increment">{{ count }}</button>
   </template>

   <script setup lang="ts">
   import { ref } from 'vue';
   const count = ref(0);
   const increment = () => count.value++;
   </script>

   <style scoped>
   button { color: red; }
   </style>
   ```

2. **响应式变量**：
   - `ref()`：基本类型
   - `reactive()`：对象类型
   - `computed()`：计算属性

3. **生命周期钩子**：
   ```typescript
   import { onMounted } from 'vue';
   onMounted(() => { console.log('Component mounted'); });
   ```

4. **组件通信**：
   - `props`：父传子
   - `emit`：子传父
   - `provide/inject`：跨层级传递

### 工具链：
1. 创建项目：
   ```bash
   npm create vue@latest  # 官方脚手架
   ```

2. 核心库：
   - Vue Router（路由）
   - Pinia（状态管理）
   - Vite（构建工具）

### 学习资源：
- [Vue3 官方文档](https://vuejs.org/)

---

## **4. CSS Framework**
### 推荐方案：
1. **Tailwind CSS**（实用类优先）：
   ```html
   <div class="p-4 bg-gray-100 hover:bg-blue-200">
     <button class="px-4 py-2 rounded-lg shadow-md">Click</button>
   </div>
   ```

2. **UI 组件库**（快速开发）：
   - [Element Plus](https://element-plus.org/)（适合中后台）
   - [Vuetify](https://vuetifyjs.com/)（Material Design 风格）

### 核心概念：
- **Flex/Grid 布局**（必学）
- **响应式设计**（媒体查询或 Tailwind 断点）
- **CSS 变量**：
  ```css
  :root { --primary-color: #42b983; }
  .button { background-color: var(--primary-color); }
  ```

---

## **5. Examples**
1. [TodoMVC Vue.js](https://todomvc.com/examples/vue/dist/): [code](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vue)
2. [TodoMVC React](https://todomvc.com/examples/react/dist/): [code](https://github.com/tastejs/todomvc/tree/gh-pages/examples/vue)
3. [Vue3 examples](https://vuejs.org/examples)  
4. [Vue.js challenges](https://cn-vuejs-challenges.netlify.app/)
