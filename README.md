# StoreCake Components

Thư viện component UI tùy chỉnh cho các dự án StoreCake, được xây dựng với Vue 3, TypeScript, Vite và Tailwind CSS.

## Cài đặt

```bash
# Sử dụng npm
npm install storecake_component

# Hoặc sử dụng yarn
yarn add storecake_component
```

## Cách sử dụng

### Cài đặt toàn bộ thư viện

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import StoreCakeComponents from 'storecake_component'
import 'storecake_component/dist/style.css' // Import CSS

const app = createApp(App)
app.use(StoreCakeComponents)
app.mount('#app')
```

### Sử dụng từng component riêng lẻ

```javascript
import { Button, Input } from 'storecake_component'

export default {
  components: {
    Button,
    Input
  }
}
```

## Các component có sẵn

- `Button` - Nút tùy chỉnh với nhiều biến thể
- `Input` - Trường nhập liệu tùy chỉnh
- (Thêm các component khác tại đây)

## Tùy chỉnh theme

Bạn có thể tùy chỉnh theme bằng cách ghi đè các biến CSS tùy chỉnh hoặc mở rộng cấu hình Tailwind trong dự án của bạn.

## Phát triển

```bash
# Cài đặt dependencies
npm install

# Chạy chế độ phát triển
npm run dev

# Build thư viện
npm run build

# Chạy test
npm run test
```

## Tác giả

- [Tên của bạn] - [email@example.com]

## Giấy phép

Dự án này được cấp phép theo giấy phép MIT - xem file [LICENSE](LICENSE) để biết thêm chi tiết.
