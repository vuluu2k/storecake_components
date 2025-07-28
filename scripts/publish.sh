#!/bin/bash

# Dừng script nếu có lỗi xảy ra
set -e

echo "🚀 Bắt đầu quá trình publish thư viện lên npm..."

# 1. Kiểm tra xem đã đăng nhập npm chưa
if ! npm whoami &> /dev/null; then
  echo "❌ Bạn chưa đăng nhập npm. Vui lòng chạy 'npm login' trước."
  exit 1
fi

# 2. Lấy version hiện tại từ package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "🔍 Phiên bản hiện tại: $CURRENT_VERSION"

# 3. Hỏi người dùng nhập phiên bản mới
read -p "📌 Nhập phiên bản mới (hiện tại: $CURRENT_VERSION, nhấn Enter để giữ nguyên): " VERSION

# Nếu người dùng không nhập gì, giữ nguyên version hiện tại
if [ -z "$VERSION" ]; then
  VERSION=$CURRENT_VERSION
fi

# 4. Cập nhật version trong package.json
npm version $VERSION --no-git-tag-version

# 5. Build thư viện
echo "🔨 Đang build thư viện..."
npm run build

# 6. Kiểm tra xem đã có file build chưa
if [ ! -d "dist" ]; then
  echo "❌ Lỗi: Thư mục dist không tồn tại sau khi build"
  exit 1
fi

# 7. Publish lên npm
echo "🚀 Đang publish lên npm..."
npm publish --access public

# 8. Commit và tag version mới
echo "🔖 Tạo tag và commit thay đổi..."
git add .
git commit -m "chore: release v$VERSION"
git tag -a v$VERSION -m "v$VERSION"

echo "✅ Đã publish thành công phiên bản v$VERSION lên npm!"
echo "👉 Đừng quên push thay đổi lên remote repository:"
echo "   git push origin main --tags"
