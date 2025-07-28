// Import các component
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'
// Import thêm các component khác tại đây

// Export tất cả các component
export {
  Button,
  Input,
  // Thêm các component khác vào đây
}

// Định nghĩa kiểu cho các component
const components = {
  Button,
  Input,
  // Thêm các component khác vào đây
}

// Cài đặt plugin để sử dụng toàn cục
import type { App } from 'vue'

export default {
  install(app: App) {
    // Đăng ký tất cả các component toàn cục
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
