/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tắt preflight để tránh xung đột với CSS base của dự án sử dụng
  corePlugins: {
    preflight: false,
  },
  // Chỉ include các file component của thư viện
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,vue,mdx}"
  ],
  // Tùy chỉnh theme nếu cần
  theme: {
    extend: {
      // Thêm các tùy chỉnh theme của bạn ở đây
      colors: {
        primary: '#4F46E5',
        secondary: '#10B981',
        // Thêm các màu tùy chỉnh khác
      },
    },
  },
  plugins: [
    // Thêm các plugin Tailwind nếu cần
  ],
  // Tùy chọn quan trọng: Sử dụng !important cho tất cả các utility classes
  important: true, // Điều này giúp đảm bảo các class của thư viện sẽ ghi đè CSS từ dự án sử dụng
}
